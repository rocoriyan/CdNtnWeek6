require("dotenv").config();
const express = require("express"); //es5. import is es6
const mongoose = require("mongoose");

const connection = require("./db/connection");

const bookRouter = require("./books/myRoutes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});