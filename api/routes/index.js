const express = require("express");

const app = express();

app.use(require("./productos"));
// app.use(require("./product"));

module.exports = app;
