import "./style.css";
import React from "react";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Input">
        <input
          type="text"
          id="input-url"
          placeholder="Shorten your URL"
        ></input>
        <button className="shorten-button">Shorten</button>
      </div>
    </div>
  );
}
