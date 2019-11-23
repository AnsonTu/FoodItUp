const express = require("express");
const app = express();
const router = require("./router");
const dotenv = require("dotenv").config;
const db = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3090;

app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());
router(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
