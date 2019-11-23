const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(process.env.DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
        console.error(err);
      });
  }
}

module.exports = new Database();
