const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		minlength: [3, "must be at least 3 characters"]

}})

const Authors = mongoose.model("authors", AuthorsSchema);

module.exports = Authors;