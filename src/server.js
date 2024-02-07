require("dotenv").config();
const express = require("express"); //es5. import is es6
const mongoose = require("mongoose");

const app = express();

const fakeArr = [];

app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connection is working");
}

connection();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  }
})

const Book = mongoose.model("Book", bookSchema);

app.get("/books", (request, response) => {
});

app.get("/books/getfirstbook", (request, response) => {
});

app.post("/books", (request, response) => {
});

app.put("/books", (request, response) => {
});

app.delete("/books", (request, response) => {
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
