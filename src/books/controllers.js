const Book = require("./model");

const logTypeOfResult = async(result) => {
  console.log(`Type of result: ${typeof result} - result: ${result}`);
}

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
        await logTypeOfResult(books);
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
        const book = await Book.findOneAndUpdate({ title: request.body.title }, { author: request.body.author }); //find book where title = the title in the request body & replace its author with the author in the request body
        await logTypeOfResult(book);
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
        await logTypeOfResult(book);
        response.send({ message: "success deleted book", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const searchAndUpdate = async(request, response) => { //this works but the "new info" shows old info for some reason
    /*request format
    url = /books/searchAndUpdate?title=___
    body=
        {
            "title": "",
            "author": "",
            "genre": ""
            }
        }
    */
    try{
        const book = await Book.findOneAndUpdate({ title: request.query.title }, { title: request.body.title, author: request.body.author, genre: request.body.genre });
        await logTypeOfResult(book);
        response.send({ message: "success updated book", book: book});
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const findByTitle = async(request, response) => {
    /*request body format
        {
            "title": ""
        }
    */
    try{
        const book = await Book.findOne({title: request.body.title});
        await logTypeOfResult(book);
        response.send({ message: "success found book", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const deleteAll = async(request, response) => { //tested and working
    try{
        const book = await Book.deleteMany();
        await logTypeOfResult(book);
        response.send({ message: "success deleted books", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const deleteASingleBook = async(request, response) => { //tested and working
    try{
        const book = await Book.deleteOne();
        await logTypeOfResult(book);
        response.send({ message: "success deleted book", book: book });
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
}

const addManyBooks = async(request, response) =>{ //does not work. breaks on "addedBook = await.Book.Create" line. i dont know why.
    try{
        //maybe like a foreach function? go through every object inside body object and call addBook using information specific to them
        /*body will look something like:
            {
                "1": {
                    "title": "To Catch a Pikachu",
                    "author": "Team Rocket",
                    "genre": "Gothic"
                },
                "2": {
                    "title": "The Midnight SQLi",
                    "author": "A.U. Thor",
                    "genre": "Thriller"
                },
                "3": {
                    "title": "Trailing Commas",
                    "author": "J. Sonne",
                    "genre": "Young Adult"
                },
                "4": {
                    "title": "Duck-tective V3",
                    "author": "Stan A. Hirsch",
                    "genre": "Mystery"
                }
            }
        */
        //key names for each book dont matter
        let addedBook = {};
        let addedBookList = [];
        for(var book in request.body){
            console.log((request.body)[book]);
            addedBook = await Book.create({
                "title": (request.body)[book].title, //string = object.object.key's value
                "author": (request.body)[book].author,
                "genre": (request.body)[book].genre,
            });
            console.log("i just added a book !");
            addedBookList.push(addedBook);
        };
        await logTypeOfResult(book);
        response.send({ message: "success added books", books: addedBookList});
    }
    catch(error){
        response.send({ message: "an error has occured", error: error});
    }
    /*
    {
        "message": "an error has occured",
        "error": {
            "index": 0,
            "code": 11000,
            "keyPattern": {
            "title": 1
            },
            "keyValue": {
            "title": "To Catch a Pikachu"
            }
        }
    }
    */
}

module.exports = { //obj holding all functions to be exported
    addBook: addBook,
    getAllBooks: getAllBooks,
    updateBook: updateBook,
    deleteBook: deleteBook,
    searchAndUpdate: searchAndUpdate,
    findByTitle: findByTitle,
    deleteAll: deleteAll,
    deleteASingleBook: deleteASingleBook,
    addManyBooks: addManyBooks
};