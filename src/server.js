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

app.get("/books/getAllBooks", async(request, response) => {
  const books = await Book.find({}); //await means wait to finish before going to next thing
  response.send({ message: "success got all books", books: books });
});

app.post("/books/addBook", async(request, response) => {
  const book = await Book.create({
    title: request.body.title, //string = object.object.key's value
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "success book created", book: book })
});

app.put("/books/updateBook", async(request, response) => {
  await Book.findOneAndUpdate({ title: request.body.title }, { author: request.body.author }); //find book where title = the title in the request body & replace its author with the author in the request body
  response.send({ message: "success updated author" })
});

app.delete("/books/deleteBook", async(request, response) => {
  const book = await Book.deleteOne({ title: request.body.title }); //delete book where title matches request body title
  response.send({ message: "success deleted book", book: book })
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});