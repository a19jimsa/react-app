import React from "react";
import DialogBox from "./dialogbox";
import {
  AwesomeButton
} from 'react-awesome-button';
import "react-awesome-button/dist/themes/theme-amber.css";

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {show: false, username: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    async createUser(){
        const data = {
            "username": this.state.username
        }

        await fetch("/users/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json()).then(data => {
                this.handleClick();
        });
    }

    handleClick(){
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    handleOnChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({username: value})
    }

    render() { 
        if(this.state.show){
        return <div><AwesomeButton onPress={this.handleClick}>Skapa användare</AwesomeButton>
            <DialogBox>
                <AwesomeButton type="reddit" className="corner" onPress={this.handleClick}>X</AwesomeButton>
                <h1>Skapa användare</h1>
                <label>Användarnamn</label>
                <input name="username" onChange={this.handleOnChange} type="text"></input>
                <AwesomeButton type="primary" onPress={this.createUser}>Skapa</AwesomeButton>
            </DialogBox>
            </div>
        }else{
            return <div><AwesomeButton onPress={this.handleClick}>Skapa användare</AwesomeButton></div>
        }
    }
}

export default CreateUserForm;