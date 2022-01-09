import React from "react";
import Breadcrums from "./breadcrums";
import Posting from "./Posting";
import AnswerButton from "./answerbutton";
import ForumThreads from "./forumthreads";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: ""}
    }

    render() {
        if(this.props.type == "Forum"){
            return <div className="container">
            <Breadcrums />
            <Posting id={this.props.id} />
            <AnswerButton value="Skriv svar" id={this.props.id} username={this.props.username} />
            </div>
        }else{
            return <div className="container">
            <ForumThreads />
            </div>
        }
    }
}

export default Container;