import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import Menu from "./components/menu";
import Header from "./components/header";

ReactDOM.render(<Header />, document.getElementById("head"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Container />, document.getElementById("content"));