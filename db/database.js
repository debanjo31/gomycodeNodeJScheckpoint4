require("dotenv").config();
let mongoose = require("mongoose");
const server = process.env.DB_SEVER; // REPLACE WITH YOUR DB SERVER
const database = process.env.DB_COLLECTION; // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error:", err);
      });
  }
}
module.exports = new Database();
