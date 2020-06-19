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

	Blog.create(req.body, function(err, newBlog){
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
			console.log(foundBlog)
			res.render('edit-blog', {blog: foundBlog});
		}
	})
	
})

router.put('/blog/:id', function(req, res){

	Blog.findByIdAndUpdate(req.params.id, req.body, function(err, foundBlog){
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

function createSubData(subData){
	console.log(subData);
	// for(var i =0; i <subData.sub_heading.length; i++){

	// }
}

module.exports = router;