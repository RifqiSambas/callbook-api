const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const path = require("path");

router
	.get("/book", async(req, res) => {
		const books = await Book.find();
		res.send(books);
	})

	.post("/book", async(req, res) => {
		const book = new Book({
			title: req.body.title,
			author: req.body.author,
			link_book: req.body.link_book,
			link_author: req.body.link_author
		});
		await book.save();
		res.send(book);
	})

module.exports = router;
