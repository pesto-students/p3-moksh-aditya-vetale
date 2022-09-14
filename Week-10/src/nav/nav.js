import "./style.css";
import logo from "./bitly-logo.png";
import React from "react";
export default function Nav() {
  return (
    <div className="Nav">
      <img id="symbol" src={logo} alt="Image not Loading"></img>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About</li>
        <li>Log in</li>
      </ul>
    </div>
  );
}
