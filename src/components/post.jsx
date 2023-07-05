import React from "react";
import Breadcrums from "./breadcrums";
import Quote from "./quote";
import { Facebook } from "react-content-loader";

const MyFacebookLoader = () => <Facebook />;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      placeholder: "Skriv ett svar",
      content: "",
      loaded: false,
      breadcrum: this.props.breadcrum,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  async componentDidMount() {
    //GET all comments on specific thread
    await fetch("/comments/" + this.props.id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data, loaded: true });
      });
  }

  async createAnswer() {
    const date = new Date();
    const datetime =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const answer = {
      id: this.props.id,
      content: this.state.content,
      posted: datetime,
      user: "Jimmy",
    };

    await fetch("/comments/" + this.props.id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((response) => response.json())
      .then((data) => {
        this.componentDidMount();
        //Update thread with latest post
        fetch("/threads/updatethread/" + this.props.id, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answer),
        })
          .then((response) => response.json())
          .then((data) => {
            this.setState({ content: "" });
          });
      });
  }

  handleShowClick(message) {
    if (message !== "") {
      message = "[quote]" + message + "[/quote]";
    }

    this.setState((prevState) => ({
      show: !prevState.show,
      content: message,
    }));
  }

  handleClick() {
    this.handleShowClick();
    this.createAnswer();
  }

  async updateState(query) {
    await fetch("/comments/" + this.props.id + "/" + query, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  handleOnChangeSearch(event) {
    this.updateState(event.target.value);
  }

  handleOnChange(event) {
    this.setState({ content: event.target.value });
  }

  async handleLikeClick(id) {
    await fetch("/comments/like/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.componentDidMount();
      });
  }

  render() {
    //if(this.state.loaded){
    return (
      <div>
        <div className="threadhead">
          <Breadcrums value={this.state.breadcrum} />
          <div>
            Sök i tråd:{" "}
            <input type="text" onChange={this.handleOnChangeSearch}></input>
          </div>
        </div>
        {this.state.data.map((tag) => (
          <div key={tag._id} className="post">
            <h1>{tag.topic}</h1>
            <div className="postHead">Datum: {tag.posted}</div>
            <div className="postContent">
              <div className="postInfo">Användare: {tag.user}</div>
              <div className="postComment">
                <div className="postMessage">
                  <Quote content={tag.content} />
                </div>
                <div className="quoterow">
                  <button
                    onClick={this.handleShowClick.bind(this, tag.content)}
                  >
                    Citera
                  </button>
                  <button onClick={this.handleLikeClick.bind(this, tag._id)}>
                    Gilla({tag.likes})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {this.state.show ? (
          <div className="createPost">
            <textarea
              onChange={this.handleOnChange}
              placeholder={this.state.placeholder}
              value={this.state.content}
            ></textarea>
            <button onClick={this.handleClick}>Skicka svar</button>
            <button onClick={this.handleShowClick}>Ångra</button>
          </div>
        ) : (
          <button onClick={this.handleShowClick.bind(this, "")}>
            Skriv Svar
          </button>
        )}
      </div>
    );
    /*}else{
            return <div><MyFacebookLoader /></div>
        }*/
  }
}

export default Post;
