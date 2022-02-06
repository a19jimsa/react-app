import React from "react";
import DialogBox from "./Dialogbox";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';

import "react-awesome-button/dist/themes/theme-amber.css";

class LoginUserForm extends React.Component {
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
        return <div><AwesomeButton onPress={this.handleClick}>Logga in</AwesomeButton>
            <DialogBox>
                <AwesomeButton onPress={this.handleClick} type="reddit" className="corner">X</AwesomeButton>
                <h1>Logga in</h1>
                <label>Användarnamn</label>
                <input type="text"></input>
                <AwesomeButton onPress={this.handleClick}>Logga in</AwesomeButton>
            </DialogBox>
            </div>
        }else{
            return <div><AwesomeButton onPress={this.handleClick}>Logga in</AwesomeButton></div>
        }
    }
}

export default LoginUserForm;