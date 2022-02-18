import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import Menu from "./components/menu";

ReactDOM.render(<Container />, document.getElementById("content"));
ReactDOM.render(<Menu />, document.getElementById("menu"));