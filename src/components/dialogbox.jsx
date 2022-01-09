import React from "react";

class DialogBox extends React.Component {
    render() { 
        return <div className="box"><button onClick={this.handleClick} className="closeButton">X</button>{this.props.children}</div>
    }
}

export default DialogBox;