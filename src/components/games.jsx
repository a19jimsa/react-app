import React from "react";
import {AwesomeButton} from "react-awesome-button";

class Games extends React.Component {
    state = {  } 
    render() { 
        return (<div className="games">
            <h1>Välj spel</h1>
            <div className="grid-container">
                <div>
                    <h2>Mega man</h2>
                    <AwesomeButton>Starta spel</AwesomeButton>
                </div>
                <div>
                    <h2>Mega man</h2>
                    <AwesomeButton>Starta spel</AwesomeButton>
                </div>
                <div>
                    <h2>Mega man</h2>
                    <AwesomeButton>Starta spel</AwesomeButton>
                </div>
                <div>
                    <h2>Mega man</h2>
                    <AwesomeButton>Starta spel</AwesomeButton>
                </div>
            </div>
        </div>);
    }
}
 
export default Games;