var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var translatorCreate = require('./models/translate.js');
// var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/node9');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/get-translation', indexController.getTranslation);
app.get('/translator', indexController.translator);
app.get('/quiz', indexController.quiz);
app.get('/progress', indexController.progress);

var server = app.listen(8909, function() {
	console.log('Express server listening on port ' + server.address().port);
});
