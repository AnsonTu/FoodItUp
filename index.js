const express = require("express");
const app = express();
const db = require("./db");
const port = 3090;

app.get("/", function(req, res) {
  res.send("Test");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
