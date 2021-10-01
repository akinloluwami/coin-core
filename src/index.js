import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
