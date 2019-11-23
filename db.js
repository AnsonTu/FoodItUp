const mongoose = require("mongoose");

class Database {
  construtor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        "mongodb+srv://admin:western123@cluster0-a7bum.mongodb.net/test?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
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
