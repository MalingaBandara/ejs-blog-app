const express = require("express");

const mongoose = require("mongoose");
const { showCreateForm, showPosts } = require("../controllers/postController");


// Router
const postRouter = express.Router();

//---Post model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
const Post = mongoose.model("Post", postSchema);



//! Show the create form
postRouter.get("/create", showCreateForm);


//! To get all posts
postRouter.get("/list", showPosts);


//! Create the post (The main logic)
postRouter.post("/create", createPostLogic );


module.exports = postRouter;