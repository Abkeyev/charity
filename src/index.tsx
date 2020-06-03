import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-22343418-8");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
