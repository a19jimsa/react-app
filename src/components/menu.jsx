import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";
import {
  AwesomeButton
} from 'react-awesome-button';
import "react-awesome-button/dist/themes/theme-amber.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, menu){
        const value = event;
        ReactDOM.render(<Container type={value} />, document.getElementById("content"));
    }

    render() { 
        return(
        <div className="menu">        
            <nav>
                <ul>
                    <AwesomeButton onPress={this.handleClick.bind(this, "Forum")}>Forum</AwesomeButton>
                    <AwesomeButton onPress={this.handleClick.bind(this, "tradar")}>Min sida</AwesomeButton>
                    <AwesomeButton onPress={this.handleClick.bind(this, "games")}>Spel</AwesomeButton>
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu;