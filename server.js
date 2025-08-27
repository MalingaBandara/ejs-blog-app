const express = require("express");
const PORT = 3000;
const postRouter = require("./routes/postRouter");
const utils = require("./utils/dbConnect");

const app = express();


//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));


//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});

//!--- Routes
app.use("/", postRouter);


//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
