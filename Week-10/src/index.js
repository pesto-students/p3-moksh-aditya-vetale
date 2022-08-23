import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./nav/nav.js";
import Footer from "./footer/footer.js";
import Body from "./body/body.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Body />
    <Footer />
  </React.StrictMode>
);
