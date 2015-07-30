var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translator: function(req, res){
		res.render('translator')
	},
	translation: function(req, res){
		var getWords = {
			language 	: req.body.language,
			newLanguage : req.body.newLanguage,
			word 		: req.body.word
		}
		// console.log(getWords)
		// getWords.save()

		var postTranslation = function(err, doc){
			if (err) {
				res.send('no workie')
			}
			else {
				res.send(googleTranslate.translate(translation))
			}
		}
	},

	getTranslation: function(req, res){
		var getWords = {
			language 	: req.body.language,
			newLanguage : req.body.newLanguage,
			word 		: req.body.word
		}
		// console.log(getWords);

		googleTranslate.translate(getWords.word, getWords.language, getWords.newLanguage, function(err, translation){
			console.log(err);
			res.send({translatedText: translation})

		})
	},

	quiz: function(req, res){
		res.render('quiz')
	},
	progress: function(req, res){
		res.render('progress')
	}


};

module.exports = indexController;