import React from "react";
import CreateUserForm from "./Createuserform";
import LoginUserForm from "./Loginuserform";
import Background from "../images/logo192.png";

class Header extends React.Component {
    render() { 
        return <div className="head">
            <img src={Background} alt={"logo"} width="50" height="50"></img>
            <div className="buttons">
                <CreateUserForm />
                <LoginUserForm />
            </div>
        </div>
    }
}

export default Header;