import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SignUpThanksReducer from "./Redux/SignUpThanks.js";
import { HashRouter, Route } from "react-router-dom";

export const store = configureStore({
  reducer: { SignUpThanks: SignUpThanksReducer },
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" element={<App />} />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
