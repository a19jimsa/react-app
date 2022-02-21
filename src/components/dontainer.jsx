import React from "react";
import ForumThreads from "./forumthreads";
import Post from "./post";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: "dwqdwq"}
    }

    render() {
        if(this.props.type === "Forum"){
            return <div className="container">
            <Post id={this.props.id} breadcrum={this.props.breadcrum} />
            </div>
        }else{
            return <div className="container">
            <ForumThreads />
            </div>
        }
    }
}

export default Container;