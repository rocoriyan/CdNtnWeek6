const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const controllers = require("./controllers"); //previously was { addBook } and not { controllers }

bookRouter.post("/books/addBook", controllers.addBook); //adds a book

bookRouter.get("/books/getAllBooks", controllers.getAllBooks); //returns all books

bookRouter.put("/books/updateBookAuthor", controllers.updateBook); //search by book title with title in body and update author to author in body

bookRouter.put("/books/searchAndUpdate", controllers.searchAndUpdate); //search by book title with route query and update any field using request body

bookRouter.delete("/books/deleteOneBook", controllers.deleteASingleBook); //just deletes one book

bookRouter.delete("/books/deleteAllBooks", controllers.deleteAll); //deleted all books

bookRouter.delete("/books/deleteBookByTitle", controllers.deleteBook); //deletes a book based on title in request body

bookRouter.get("/books/findByTitle", controllers.findByTitle); //finds book based on title in request body

bookRouter.post("/books/addManyBooks", controllers.addManyBooks); //adds many books

module.exports = bookRouter;