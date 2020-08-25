const {Schema, model} = require("mongoose");
const { Comment, commentSchema } = require("./Comment");
const poemSchema = new Schema({
  image: String,
  title: String,
  content: String,
  time: String,
  likes: {
    type: Number,
    default: 0,
  },
  comments: [commentSchema],
});
module.exports = Poem = model("Poem", poemSchema);
