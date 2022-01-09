import React from "react";

class ThreadForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    async createThread(){
        const thread = {
            "topic": this.state.topic,
            "category": this.state.category,
            "content": this.state.content,
            "user": "Jimmy",
            "posted": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        }

        //Create thread
        await fetch("http://localhost:3000/record/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(thread)
        }).then((response) => response.json()).then(data => {
            //Create thread comment on comments
            fetch("/comments/"+data.insertedId, {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(thread)
                }).then((response) => response.json()).then(data => {
                    console.log(data);
            });
        });
    }

    handleClick(){
        this.createThread();
    }

    handleOnChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
        [name]: value
        });
        console.log(name+" " +value);

    }

    render() { 
        return <div className="box">
            <h1>Skapa ny tråd</h1>
            <label>Rubrik</label>
            <input type="text" name="topic" onChange={this.handleOnChange}/>
            <label>Kategori</label>
            <input type="text" name="category" onChange={this.handleOnChange}/>
            <label>Inlägg</label>
            <textarea name="content" onChange={this.handleOnChange}/>
            <input type="submit" value="Skapa tråd" onClick={this.handleClick}/>
        </div>
    }
}

export default ThreadForm;