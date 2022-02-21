import React from "react";

class Breadcrums extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({value: this.props.value});

    }
    render() { 
        return <div className="breadcrums">Forum/{this.state.value}</div>;
    }
}

export default Breadcrums;