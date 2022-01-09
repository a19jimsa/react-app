import React from "react";
import ThreadForm from "./threadform";

class CreateThread extends React.Component {
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
            return <div>
                <button onClick={this.handleClick} name="createThread">Skapa ny tråd</button>
                <ThreadForm />
            </div>
        }else{
            return(
            <div>
                <button onClick={this.handleClick} name="createThread">Skapa ny tråd</button>
            </div>
            )
        }
    }
}

export default CreateThread;