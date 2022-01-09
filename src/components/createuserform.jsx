import React from "react";
import DialogBox from "./dialogbox";

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
        return <div><button onClick={this.handleClick}>Skapa användare</button>
            <DialogBox>
                <h1>Skapa användare</h1>
                <label>Användarnamn</label>
                <input type="text"></input>
                <input type="button" value="Skapa användare"></input>
            </DialogBox>
            </div>
        }else{
            return <div><button onClick={this.handleClick}>Skapa användare</button></div>
        }
    }
}

export default CreateUserForm;