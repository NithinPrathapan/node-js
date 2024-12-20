const express = require("express");
const mongoose = require("mongoose");
//! import the todoRoutes
const todoRoutes = require("./routes/todoRoutes.js");
const bodyParser = require("body-parser");
// !set up the express app
const app = express();

//! to make the data from the front-end parsed
app.use(bodyParser.urlencoded({ extended: true }));
//! set up the public folder as static
app.use(express.static("./public"));
//! setting up the template engine
app.set("view engine", "ejs");
//! setting up the route path, and render pages with data fetched from the mongoose dataase

app.use("/", todoRoutes);

// !mongodb connection and the server listen to the port
mongoose
  .connect("mongodb://127.0.0.1:27017/todoApplication")
  .then(() => {
    console.log("mongodb connected");
    app.listen(3000, () => {
      console.log("server started on port 3000");
    });
  })
  .catch((err) => console.log(err));
