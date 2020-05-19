var express 		= require('express'),
	app				= express(),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
	methodOverride	= require('method-override');

var indexRoutes = require('./routes/index');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_DB);


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.use(indexRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
	console.log('BlogCreate server started');
});
