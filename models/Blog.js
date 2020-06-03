var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: String,
	title_image_url: String,
	date: {type: Date, default: Date.now()},
	author: {type: String, default: 'Keefer Gregoire'},
	title_description: String,
	subData: [{
		sub_heading: String,
		blog_text: String,
		normal_image_url: String,
		normal_image_caption: String,
		code: String,
		language: String
	}]
});

module.exports = mongoose.model("Blog", blogSchema);