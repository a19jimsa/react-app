import React from "react";

import {
  AwesomeButton
} from 'react-awesome-button';
import "react-awesome-button/dist/themes/theme-amber.css";

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: "Skriv ett svar"}
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
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
                console.log(data);
                
        });
    }

    handleClick(){
        this.createAnswer();
    }

    handleOnChange(event){
        this.setState({content: event.target.value});
    }

    render() { 
        return <div className="createPost">
            <textarea onChange={this.handleOnChange} placeholder={this.state.content}></textarea>
            <AwesomeButton onClick={this.handleClick}>Skicka meddelande</AwesomeButton>
        </div>;
    }
}

export default AnswerForm;