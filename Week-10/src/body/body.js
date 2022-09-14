import "./body.css";
import logo from "./Logo.jpg";
import React from "react";
export default function Body() {
  return (
    <div className="Body">
      <h1>Short links, big results</h1>
      <h3>
        A URL shortener built with powerful tools to help you grow and protect
        your brand.
      </h3>
      <img id="Logo" src={logo} alt="Image not Loading"></img>
    </div>
  );
}
