const express = require("express"); //es5. import is es6

const app = express();

app.get("/health", (req, res) => {
  res.send("healthy");
});

//          ↓ site path               ↓ directory
app.use("/example", express.static("example")); //'/example' and 'example' could be different. dont have to be the same

//when youre here ↓ ,       ↓ do this
app.use("/rocoriyan", express.static("rocoriyan"));

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
