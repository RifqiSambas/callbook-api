const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const path = require("path");

router
	.get("/book", async (req, res) => {
		const books = await Book.find();
		res.status(200).send({message: "behasil menambah data"});
	})

	.get("/book/:id", async (req, res) => {
		try {
			const book = await Book.findOne({ _id: req.params.id })
			res.send(book);
		} catch {
			res.status(404).send({error : 'buku tidak ditemukan'});
		}
	})

	.post("/book", async (req, res) => {
		try{
			if(req.body){
					const book = new Book({
					title: req.body.title,
					author: req.body.author,
					link_book: req.body.link_book,
					link_author: req.body.link_author
				});
				await book.save();
				res.status(200).send({message: "berhasil menambah data buku"});
			}
		} catch {
			res.status(404).send("gagal menambah data buku")
		}
	})

	router.put("/book/:id", async (req, res) => {
		try {
			const book = await Book.findOne({ _id: req.params.id })

			if (req.body.title) {
				book.title = req.body.title
			}
			if (req.body.author) {
				book.content = req.body.author
			}
			if (req.body.link_author) {
				book.content = req.body.author
			}
			if (req.body.link_book) {
				book.content = req.body.author
			}

			await book.save()
			res.send(book)
		} catch {
			res.status(404).send({ error: "gagal memperbarui buku" })
		}
	})

	.delete("/book/:id", async (req, res) => {
		try{
			await Book.deleteOne({ _id: req.params.id });
			res.status(204).send({message: "data buku berhasil dihapus"});
		} catch{
			res.status(404).send({error: "gagal menghapus data buku" });
		}
	})

module.exports = router;
