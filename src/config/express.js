const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({extended: true}));


module.exports = app;