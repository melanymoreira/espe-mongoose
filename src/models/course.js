const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  numberOfTopics: { type: Number },
  publishedAt: { type: Date }
});

module.exports = mongoose.model("Course", courseSchema);
