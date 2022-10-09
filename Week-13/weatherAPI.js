const express = require("express");
const request = require("request");
const app = express();

app.get("/cityweather/", (req, res) => {
  const city = req.query.city;
  request(
    `https://api.openweathermap.org/data/2.5/weather?APPID=caab29f090534e48c1eb4c0680fbc36c&units=metric&q=${city}`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        let data = JSON.parse(body);
        console.log(data);
        res.send(data);
      }
    }
  );
});

///----------forcast

app.get("/forcast/", (req, res) => {
  const city = req.query.city;
  const date = req.query.date;
  console.log(req.query);
  request(
    `https://api.weatherapi.com/v1/future.json?key=caab29f090534e48c1eb4c0680fbc36c&q=${city}&dt=${date}`,
    (err, response, body) => {
      if (err) {
        throw err;
      } else if (response.statusCode === 200) {
        let data = JSON.parse(body);
        // console.log(body.json);
        res.send(data);
      }
    }
  );
});

///----------------data for multiple cities
let cities = ["Kolhapur", "Indore", "Sangli", "London", "Bangalore"];
app.get("/multiple/cities/", (req, res) => {
  async function calculate() {
    const requiredData = [];
    await Promise.all(
      cities.map(async (city) => {
        await new Promise((resolve, reject) => {
          request(
            `https://api.openweathermap.org/data/2.5/weather?APPID=caab29f090534e48c1eb4c0680fbc36c&units=metric&q=${city}`,
            function (error, response, body) {
              if (response.statusCode === 200) {
                console.log(body);
                let data = JSON.parse(body);
                requiredData.push(data);
                resolve(data);
              } else if (error) {
                reject(error);
              }
            }
          );
        });
        console.log(city);
      })
    );
    // console.log(requiredData);
    res.send(requiredData);
  }
  calculate();
});

app.listen(3000, () => console.log("server running"));
