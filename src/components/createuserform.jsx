import React from "react";
import DialogBox from "./Dialogbox";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';

import "react-awesome-button/dist/themes/theme-amber.css";

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {show: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.state.show = !this.state.show;
        this.setState({show: this.state.show});
    }

    render() { 
        if(this.state.show){
        return <div><AwesomeButton onPress={this.handleClick}>Skapa användare</AwesomeButton>
            <DialogBox>
                <AwesomeButton type="reddit" className="corner" onPress={this.handleClick}>X</AwesomeButton>
                <h1>Skapa användare</h1>
                <label>Användarnamn</label>
                <input type="text"></input>
                <AwesomeButton type="primary" onPress={this.handleClick}>Skapa</AwesomeButton>
            </DialogBox>
            </div>
        }else{
            return <div><AwesomeButton onPress={this.handleClick}>Skapa användare</AwesomeButton></div>
        }
    }
}

export default CreateUserForm;