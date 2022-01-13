import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import CreateThread from "./createthread";

class ForumThreads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], filter: ""}
        this.handleClick = this.handleClick.bind(this);
        this.filterThreads = this.filterThreads.bind(this);
    }

    async componentDidMount(){
        //create comment on city chatt
        await fetch("/threads/", {
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        })
            .then((response) => response.json()).then(data => {
                console.log(data);
                this.setState({data: data});
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

    render() { 
        return <div>
            <div className="header"><CreateThread /><div>Sök trådar: <input type="text" onChange={this.filterThreads}></input></div></div>
            <table>
                <thead>
                <tr>
                    <th>Rubrik</th><th>Kategori</th><th>Senaste inlägg</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.data.map(tag => <tr key={tag._id}>
                        <td onClick={this.handleClick.bind(this, tag._id, tag.user)}>{tag.topic}</td><td>{tag.category}</td><td>{tag.content} av {tag.user} postat {tag.posted}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

export default ForumThreads;