import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/dontainer";
import Menu from "./components/menu";
import Header from "./components/header";

ReactDOM.render(<Header />, document.getElementById("head"));
ReactDOM.render(<Container />, document.getElementById("content"));
ReactDOM.render(<Menu />, document.getElementById("menu"));