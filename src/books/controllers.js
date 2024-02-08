const Book = require("./model");

const addBook = async(request, response) => {
    try{
        const book = await Book.create({
            title: request.body.title, //string = object.object.key's value
            author: request.body.author,
            genre: request.body.genre,
          });
          response.send({ message: "success book created", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
};

const getAllBooks = async(request, response) => {
    try{
        const books = await Book.find({}); //await means wait to finish before going to next thing
        response.send({ message: "success got all books", books: books });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const updateBook = async(request, response) => {
    try{
        await Book.findOneAndUpdate({ title: request.body.title }, { author: request.body.author }); //find book where title = the title in the request body & replace its author with the author in the request body
        response.send({ message: "success updated author" })
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const deleteBook = async(request, response) => {
    try{
        const book = await Book.deleteOne({ title: request.body.title }); //delete book where title matches request body title
        response.send({ message: "success deleted book", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

module.exports = { //obj holding all functions to be exported
    addBook: addBook,
    getAllBooks: getAllBooks,
    updateBook: updateBook,
    deleteBook: deleteBook,
};