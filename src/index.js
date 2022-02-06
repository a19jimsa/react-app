import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Menu from "./components/Menu";
import Header from "./components/Header"

ReactDOM.render(<Container />, document.getElementById("content"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Header />, document.getElementById("head"));