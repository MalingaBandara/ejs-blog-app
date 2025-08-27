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

module.exports = mongoose;