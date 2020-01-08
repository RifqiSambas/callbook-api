const mongoose = require("mongoose");

const schema = mongoose.Schema({
	title: String,
	author: String, 
	link_book: String, 
	link_author: String 
});

module.exports = mongoose.model('books', schema);
