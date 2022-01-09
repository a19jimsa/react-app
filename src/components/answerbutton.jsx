import React from "react";
import AnswerForm from "./answerform";

class AnswerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.state.show = !this.state.show;
        this.setState({show: this.state.show});
    }

    render() { 
        if(this.state.show){
            return(
            <div className="createPost">
                <AnswerForm id={this.props.id} content={this.props.content} username={this.props.username} />
            </div>
            )
        }else{
            return <div className="answerButton"><button onClick={this.handleClick}>{this.props.value}</button></div>
        }
        
    }
}

export default AnswerButton;