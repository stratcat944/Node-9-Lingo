var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
	language : {type : String},
	newLanguage : {type : String},
	word : {type : String}
});

var translatorCreate = mongoose.model('translator', appSchema);

module.exports = translatorCreate;