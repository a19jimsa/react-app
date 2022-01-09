import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Menu from "./components/Menu";
import Header from "./components/header"

ReactDOM.render(<Container />, document.getElementById("content"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Header />, document.getElementById("head"));