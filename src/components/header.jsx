import React from "react";
import CreateUserForm from "./Createuserform";
import LoginUserForm from "./Loginuserform";

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