import React from "react";
import ForumThreads from "./Forumthreads";
import Post from "./Post";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: ""}
    }

    render() {
        if(this.props.type === "Forum"){
            return <div className="container">
            <Post id={this.props.id} />
            </div>
        }else{
            return <div className="container">
            <ForumThreads />
            </div>
        }
    }
}

export default Container;