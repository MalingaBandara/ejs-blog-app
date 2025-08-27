

//! Show the create form
const showCreateForm = (req, res) => {
    res.render("createPost");
};

//! To get all posts
const showPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
};


//! Create the post (The main logic)
const createPostLogic = async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
};

module.exports = {
    showCreateForm,
    showPosts,
    createPostLogic
};