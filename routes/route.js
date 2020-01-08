const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const path = require("path");

router
	.get("/book", async (req, res) => {
		const books = await Book.find();
		res.send(books);
	})

	.get("/book/:id", async (req, res) => {
		try {
			const book = await Book.findOne({ _id: req.params.id })
			res.send(book);
		} catch {
			res.status(404);
			res.send({error : 'buku tidak ditemukan'});
		}
	})

	.post("/book", async (req, res) => {
		const book = new Book({
			title: req.body.title,
			author: req.body.author,
			link_book: req.body.link_book,
			link_author: req.body.link_author
		});
		await book.save();
		res.send(book);
	})

	.delete("/book/:id", async (req, res) => {
		try{
			await Book.deleteOne({ _id: req.params.id });
			res.status(204).send();
		} catch{
			res.status(404);
			res.send({error: "Buku tidak ditemukan" });
		}
	})

	.patch("/book/:id", async (req, res) => {
		try{
			const book = await Book.findOne({ _id: req.params.id });

			if(req.body.title)
				book.title = req.body.title
			if(req.body.author)
				book.author = req.body.author
			if(req.body.link_book)
				book.link_book = req.body.link_book
			if(req.body.link_author)
				book.link_author = req.body.link_author

			await book.save();
			res.sed(book);
		} catch{
			res.status(404);
			res.send({error: "Buku tidak ditemukan"});
		}
	})

module.exports = router;
