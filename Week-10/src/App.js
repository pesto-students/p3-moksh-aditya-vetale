// import "./App.css";
const axios = require("axios");
let url =
  "https://openbase.com/categories/js/best-javascript-url-shortener-api-libraries";
async function handler() {
  const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
  console.log(res.data.result.full_short_link);
}
handler();
