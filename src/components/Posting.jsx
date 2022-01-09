import React from "react";
import reactDom from "react-dom";

class Posting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
        console.log("Posten har laddats");
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        //create comment on city chatt
        await fetch("/comments/"+this.props.id, {
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        })
            .then((response) => response.json()).then(data => {
                console.log(data);
                this.setState({data: data});
        });
    }

    async createAnswer(){
        const date = new Date();
        const datetime = date.toLocaleDateString() + " " +date.toLocaleTimeString();
        const data = {
            "id": this.props.id,
            "content": this.state.content,
            "posted": datetime,
            "user": this.props.username
        }

        await fetch("/comments/"+this.props.id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json()).then(data => {
                this.componentDidMount();
        });
    }

    handleClick(){
        this.createAnswer();
    }

    render() { 
        return <div>
            {this.state.data.map(tag=><div key={tag._id} className="post">
                <h1>{tag.topic}</h1>
                <div className="postHead">Datum: {tag.posted}</div>
                <div className="postContent">
                    <div className="postInfo">{tag.user}</div>
                    <div className="postComment">
                        <div className="postMessage">{tag.content}</div>
                        <button onClick={this.handleClick}>Skicka meddelande</button>
                    </div>
                </div>
            </div>)}
        </div>
    }
}

export default Posting;