import React from "react";
import ReactDOM from "react-dom";
import CreateUserForm from "./createuserform";
import LoginUserForm from "./loginuserform";

class Header extends React.Component {
    render() { 
        return <div className="head">
            <div>Logo</div>
            <div className="buttons">
                <CreateUserForm />
                <LoginUserForm />
            </div>
        </div>
    }
}

export default Header;