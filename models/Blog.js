var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: String,
	title_image_url: String,
	date: {type: Date, default: Date.now()},
	author: {type: String, default: 'Keefer Gregoire'},
	title_description: String,
	subData: {
		sub_heading: Array,
		blog_text: Array,
		normal_image_url: Array,
		normal_image_caption: Array,
		justify: Array
	}
});

module.exports = mongoose.model("Blog", blogSchema);