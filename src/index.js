import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SignUpThanksReducer from "./Redux/SignUpThanks.js";

export const store = configureStore({
  reducer: { SignUpThanks: SignUpThanksReducer },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
