import "./style.css";
import React, { useEffect, useState } from "react";
const axios = require("axios");
export default function Footer() {
  const [url, setURL] = useState(null);
  const [shortURL, setShortURL] = useState(null);
  function MakeURLshort() {
    async function handler() {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShortURL(res.data.result.full_short_link);
      setURL("");
    }
    handler();
  }

  console.log({ url });
  return (
    <div className="Footer">
      <div className="Input">
        <input
          type="text"
          id="input-url"
          placeholder="Paste your link ......"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        ></input>
        <button className="shorten-button" onClick={() => MakeURLshort()}>
          Shorten
        </button>
      </div>
      {shortURL ? (
        <div id="clear">
          <text id="output">{shortURL}</text>
          <button id="output-button" onClick={() => setShortURL(null)}>
            Clear
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
