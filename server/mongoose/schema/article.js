const mongoose = require("mongoose");

const Article = new mongoose.Schema({
  content: {
    // 게시글 본문
    type: String,
    default: "",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = Article;
