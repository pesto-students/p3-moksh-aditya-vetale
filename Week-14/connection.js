// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let db;
// async function connectToDB() {
//   try {
//     await client.connect();
//     console.log("Connected successfully to database");
//   } catch (err) {
//     throw err;
//   }
//   db = client.db("week-14_demo");
//   db.collection("demo");
// }

// function getDB() {
//   return db;
// }
// module.exports = { connection: connectToDB, getDB: getDB };

////////////////////////////////////////////------MONGOOSE------//////////////////
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  wealth_details: {
    Stocks: { type: Number },
    Crypto: { type: Number },
    FD: { type: Number },
    Savings: { type: Number },
  },
});
const model = mongoose.model("User_Details", schema); ///User_Details is collection name

module.exports = model;
