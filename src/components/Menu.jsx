import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;
        ReactDOM.render(<Container type={value}/>, document.getElementById("content"));
    }

    render() { 
        return(
        <div className="menu">        
            <nav>
                <ul>
                    <button onClick={this.handleClick} value="Forum">Forum</button>
                    <button onClick={this.handleClick} value="Nyheter">Nyheter</button>
                    <button onClick={this.handleClick} value="Trådar">Trådar</button>
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu;