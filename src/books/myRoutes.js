const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const controllers = require("./controllers"); //previously was { addBook } and not { controllers }

bookRouter.post("/books/addBook", controllers.addBook);

bookRouter.get("/books/getAllBooks", controllers.getAllBooks);

bookRouter.put("/books/updateBookAuthor", controllers.updateBook);

bookRouter.delete("/books/deleteBook", controllers.deleteBook);

module.exports = bookRouter;