import React from "react";
import DialogBox from "./dialogbox";

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
        return <div><button onClick={this.handleClick}>Logga in</button>
            <DialogBox>
                <h1>Logga in</h1>
                <label>Användarnamn</label>
                <input type="text"></input>
                <input type="button" value="Logga in"></input>
            </DialogBox>
            </div>
        }else{
            return <div><button onClick={this.handleClick}>Logga in</button></div>
        }
    }
}

export default LoginUserForm;