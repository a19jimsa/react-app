import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';

import "react-awesome-button/dist/themes/theme-amber.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event;
        ReactDOM.render(<Container type={value}/>, document.getElementById("content"));
    }

    render() { 
        return(
        <div className="menu">        
            <nav>
                <ul>
                    <AwesomeButton onPress={this.handleClick.bind("Forum")}>Forum</AwesomeButton>
                    <AwesomeButton onPress={this.handleClick.bind("tradar")}>Trådar</AwesomeButton>
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu;