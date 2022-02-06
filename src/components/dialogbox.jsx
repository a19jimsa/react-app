import React from "react";

class DialogBox extends React.Component {
    render() { 
        return <div><div className="boxBackground"></div><div className="box">{this.props.children}</div></div>
    }
}

export default DialogBox;