import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

import {
  AwesomeButton
} from 'react-awesome-button';

import "react-awesome-button/dist/themes/theme-amber.css";
import { Grid } from  'react-loader-spinner';

import { Facebook } from 'react-content-loader';
import DialogBox from "./Dialogbox";

const MyFacebookLoader = () => <Facebook />

class ForumThreads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], filter: "", show: false, loaded: false, updated: false}
        this.handleClick = this.handleClick.bind(this);
        this.filterThreads = this.filterThreads.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleCreateThread = this.handleCreateThread.bind(this);
    }

    async componentDidMount(){
        //create comment on city chatt detta är en kommentar
        await fetch("/threads/", {
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        })
            .then((response) => response.json()).then(data => {
                console.log(data);
                this.setState({data: data, loaded: true, updated: false});
        });
    }

    handleClick(id, username){
        ReactDOM.render(<Container type="Forum" id={id} username={username}/>, document.getElementById("content"));
    }

    filterThreads(event){
        this.updateState(event.target.value);
    }

    async updateState(value){
        //Get filtered
        await fetch("/threads/"+value, {
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        })
            .then((response) => response.json()).then(data => {
                this.setState({data: data});
        });
    }

    handleShow(){
        this.setState(prevState => ({
            show: !prevState.show,
          }));
          console.log(this.state.show);
    }

    async createThread(){
        const thread = {
            "topic": this.state.topic,
            "category": this.state.category,
            "content": this.state.content,
            "user": "Jimmy",
            "posted": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        }

        //Create thread
        await fetch("/threads/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(thread)
        }).then((response) => response.json()).then(data => {
            //Create thread comment on comments
            fetch("/comments/"+data.insertedId, {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(thread)
                }).then((response) => response.json()).then(data => {
                    this.componentDidMount();
            });
        });
    }

    handleCreateThread(){
        this.setState({updated: true});
        this.createThread();
        this.handleShow();
    }

    handleOnChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
        [name]: value
        });
        console.log(name+" " +value);
    }

    drawBox(){

    return <div className="boxBackground">
        <DialogBox>
            <AwesomeButton type="reddit" onPress={this.handleShow} className="corner">X</AwesomeButton>
            <h1>Skapa ny tråd</h1>
            <label>Rubrik</label>
            <input type="text" name="topic" onChange={this.handleOnChange}/>
            <label>Kategori</label>
            <input type="text" name="category" onChange={this.handleOnChange}/>
            <label>Inlägg</label>
            <textarea name="content" onChange={this.handleOnChange}/>
            <AwesomeButton onPress={this.handleCreateThread}>Skapa tråd</AwesomeButton>
        </DialogBox>
        </div>
    }

    render() {
        if(this.state.loaded){
            return <div>
                {this.state.updated ? <div className="loading"><Grid color="orange" height={150} width={150} /></div> : ""}
                <div className="header"><AwesomeButton type="primary" onPress={this.handleShow}>Skapa ny tråd</AwesomeButton>
                {this.state.show ? this.drawBox() : ""}
                <div>Sök trådar: <input type="text" onChange={this.filterThreads}></input></div></div>
                <table>
                    <thead>
                    <tr>
                        <th>Rubrik</th><th>Kategori</th><th>Inlägg</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(tag => <tr key={tag._id}>
                            <td onClick={this.handleClick.bind(this, tag._id, tag.user)}>{tag.topic}</td><td>{tag.category}</td><td>{tag.content} av {tag.user} postat {tag.posted}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        }else{
            return <div><MyFacebookLoader /></div>
        }
    }
}

export default ForumThreads;