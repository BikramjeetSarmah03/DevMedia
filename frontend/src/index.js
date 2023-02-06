import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";

axios.defaults.baseURL = "https://devmedia-server.onrender.com";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
