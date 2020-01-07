const mongoose = require("mongoose");

const connection = () => { 
	return mongoose.connect(
			process.env.DB_URL,
			{useNewUrlParser: true}
	);
}

exports.connection = connection;
