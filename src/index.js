import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

if (typeof window !== "undefined") {
  window.__JNTU_GV_APP_LOADED__ = true;
  if (typeof window.showApp === "function") {
    window.showApp();
  }
}
