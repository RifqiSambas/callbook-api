const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const port = process.env.PORT || 8080;

mongoose
	.connect(
		'mongodb+srv://sambas:sambas@cluster0-nredm.gcp.mongodb.net/ornery?retryWrites=true&w=majority', 
		{ useNewUrlParser: true })
	.then(() => {
		const app = express();
		
		app.get("/", async(req, res) => {
			res.sendFile("index.html", {'root': './docs'});
		});

		app.use("/", route);

		app.listen(port, () => {
			console.log("server has started");
		})
	}
)
