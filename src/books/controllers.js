const Book = require("./model");

const addBook = async(request, response) => {
    /*request body format
        {
            "title": "",
            "author": "",
            "genre": ""
        }
    */
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
    //no request body format
    try{
        const books = await Book.find({}); //await means wait to finish before going to next thing
        response.send({ message: "success got all books", books: books });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const updateBook = async(request, response) => {
    /*request body format
        {
            "title": "",
            "author": ""
        }
    */
    try{
        await Book.findOneAndUpdate({ title: request.body.title }, { author: request.body.author }); //find book where title = the title in the request body & replace its author with the author in the request body
        response.send({ message: "success updated author" })
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const deleteBook = async(request, response) => {
    /*request body format
        {
            "title": ""
        }
    */
    try{
        const book = await Book.deleteOne({ title: request.body.title }); //delete book where title matches request body title
        response.send({ message: "success deleted book", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const searchAndUpdate = async(request, response) => { //this works but the "new info" shows old info for some reason
    /*request body format
    {
        "search":{
            "title": ""
        },
        "update":{
            "title": "",
            "author": "",
            "genre": ""
        }
    }
    */
    try{
        const oldBook = await Book.findOne({ title: request.body.search.title });
        const book = await Book.findOneAndUpdate({ title: request.body.search.title }, { title: request.body.update.title, author: request.body.update.author, genre: request.body.update.genre });
        response.send({ message: "success updated book", "old info": oldBook, "new info": book});
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
    searchAndUpdate: searchAndUpdate,
};