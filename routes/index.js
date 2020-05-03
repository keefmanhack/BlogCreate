var express	= require('express'),
	router	= express.Router();


router.get('/', function(req, res){
	res.render('new-blog');
})

router.post('/new-blog', function(req, res){
	console.log(req.body);
})


module.exports = router;