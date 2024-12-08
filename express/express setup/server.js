const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnection.js");

const app = express();
const PORT = 3000;

connectDB();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
