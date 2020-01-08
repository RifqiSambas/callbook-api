const response = require('./respone');
const config = require('../config/connection');
const Book = require('../models/book');

const get = (req, res) => {
	Book.find({}, (err, book){
		if(err) return handleError(err);
		else response.ok(book, res);
	})	
}

const show = () => {

}

const create () => {

}

const update () => {

}

const delete () => {

}
