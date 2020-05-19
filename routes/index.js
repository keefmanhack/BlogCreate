var express	= require('express'),
	router	= express.Router();

var Blog = require('../models/Blog');


router.get('/home', function(req, res){
	Blog.find({}, function(err, foundBlogs){
		if(err){
			console.log(err);
		}else{
			res.render('home', {blogs: foundBlogs});
		}
	})
})

router.get('/new-blog', function(req, res){
	res.render('new-blog');
})

router.post('/new-blog', function(req, res){

	var newPost = {
		title: req.body.title,
		title_image_url: req.body.title_image_url,
		author: req.body.author,
		title_description: req.body.title_description,
		subData: {
			sub_heading: req.body.subData.sub_heading,
			blog_text: req.body.subData.blog_text,
			normal_image_url: req.body.subData.normal_image_url,
			normal_image_caption: req.body.subData.normal_image_caption,
			justify: parseJustify(req.body.subData.justify)
		}
	}

	Blog.create(newPost, function(err, newBlog){
		if(err){
			console.log(err);
		}else{
			res.redirect('/home');
		}
	})
});

router.get('/blog/:id/edit', function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			res.render('edit-blog', {blog: foundBlog});
		}
	})
	
})

router.put('/blog/:id', function(req, res){

	var updatedPost = {
		title: req.body.title,
		title_image_url: req.body.title_image_url,
		author: req.body.author,
		title_description: req.body.title_description,
		subData: {
			sub_heading: req.body.subData.sub_heading,
			blog_text: req.body.subData.blog_text,
			normal_image_url: req.body.subData.normal_image_url,
			normal_image_caption: req.body.subData.normal_image_caption,
			justify: parseJustify(req.body.subData.justify)
		}
	}

	Blog.findByIdAndUpdate(req.params.id, updatedPost, function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			res.redirect('/home');
		}
	})
})

router.delete('/blog/:id', function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect('/home');
		}
	})
})

function parseJustify(justify){
	var output = [];
	if(justify){
		Object.values(justify).forEach(function(key){
			output.push(Object.keys(key)[0]);
		});
	}
	return output;
}

module.exports = router;