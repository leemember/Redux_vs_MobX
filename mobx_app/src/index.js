import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";

const Hot = hot(App);

ReactDOM.render(
  <React.StrictMode>
    <Hot />
  </React.StrictMode>,
  document.getElementById("root")
);
