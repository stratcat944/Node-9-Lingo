var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translator: function(req, res){
		res.render('translator')
	}
};

module.exports = indexController;