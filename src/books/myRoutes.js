const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const controllers = require("./controllers"); //previously was { addBook } and not { controllers }

bookRouter.post("/books/addBook", controllers.addBook);

bookRouter.get("/books/getAllBooks", controllers.getAllBooks);

bookRouter.put("/books/updateBookAuthor", controllers.updateBook);

bookRouter.delete("/books/deleteOneBook", /*delete last book added function*/);

bookRouter.put("/books/searchAndUpdate", controllers.searchAndUpdate);

bookRouter.delete("/books/deleteAllBooks", /*delete all function*/)

bookRouter.delete("/books/deleteBookByTitle", controllers.deleteBook);

bookRouter.delete("/books/findByTitle", /*find function*/);

module.exports = bookRouter;