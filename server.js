const express = require("express");
const PORT = 3000;
const postRouter = require("./routes/postRouter");

const app = express();

//-----Connect DB------
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mvc-design-pattern-blog-app")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });


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
