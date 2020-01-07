const express = require("express");
const router = express.Router();
const Book = require("../model/book");

router.get("/", async(req, res) => {
	const books = await Book.find();
	res.send(books);
});

module.exports = router;
