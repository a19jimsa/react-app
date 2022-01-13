import React from "react";

class DialogBox extends React.Component {
    render() { 
        return <div className="box">{this.props.children}</div>
    }
}

export default DialogBox;