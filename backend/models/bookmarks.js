const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  body: { type: String, required: true },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
