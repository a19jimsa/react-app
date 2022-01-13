import React from "react";
import reactDom from "react-dom";

class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {content: ""}
    }

    async componentDidMount(){
        var content = this.props.content;
        console.log(content);
        if(content.includes("[quote]")){
            content = content.replaceAll("[quote]", "<div class='quote'>");
            content = content.replaceAll("[/quote]", "</div>");
        }
        this.setState({content: content});
    }

    render() { 
        return <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
    }
}

export default Quote;