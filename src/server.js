const express = require("express"); //es5. import is es6
const { request } = require("http");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE

//const response = await fetch("https://google.com"); //sends get request

const fakeArr = [];

app.use(express.json());

// HTTP Verb GET
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
