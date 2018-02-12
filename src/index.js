import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
