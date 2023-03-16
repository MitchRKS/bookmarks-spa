const express = require("express");
const router = express.Router();

const Bookmark = require("../models/bookmarks");

//Read All
router.get("/", async (req, res) => {
  try {
    const query = await Bookmark.find({});
    return res.json(query);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Update
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBookmark = await Bookmark.findByIdAndUpdate(id, {
      ...req.body,
    });
    return res.json(updatedBookmark);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//Create
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const createdBookmark = await Bookmark.create({ ...req.body });
    return res.json(createdBookmark);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBookmark = await Bookmark.findByIdAndDelete(id);
    return res.json(deletedBookmark);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//Read One
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = await Bookmark.findOne({ _id: id });
    return res.json(query);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
