import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { StyleRoot } from "radium";
import App from "./App";

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot>,
  document.getElementById("root"),
);
