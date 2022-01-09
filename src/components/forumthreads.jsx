import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import CreateThread from "./createthread";

class ForumThreads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        //create comment on city chatt
        await fetch("http://127.0.0.1:5000/", {
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

    render() { 
        return <div>
            <div className="head"><CreateThread /><div>Sök: <input type="text"></input></div></div>
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