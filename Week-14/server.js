const db = require("./connection");
const Route = require("./routes");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
async function establishConnection() {
  await mongoose
    .connect("mongodb://localhost:27017/Pesto", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));
}
establishConnection();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Route);

app.listen(3000, () => {
  console.log("Connected to server");
});
