var mongoose = require('mongoose'),
	Article = mongoose.model('Article');

var getErrorMessages = function (err) {
	if(err.errors){
		for (var errName in err.errors) {
			if(err.errors[errName].message) return err.errors[errName].message;
		}
	}else {
		return 'Unknown server error';
	}
};

exports.create = function(req,res){
	var article = new Article(req.body);
	article.creator = req.user;

	article.save(function(err) {
		if(err){
			return res.status(400).send({
				message: getErrorMessages(err)
			});
		} else {
			res.json(article);
		}
	});
};

exports.list = function(req, res){
	articles = Article.find().sort('-created').populate('creator','firstname lastname fullname').exec(function(err, artilces){
		if (err) {
			return res.status(400).send({
				message: getErrorMessages(err)
			});
		} else{
			res.json(articles);
		}
	});
};

exports.articleById = function(req, res, next, id){
	Article.findById(id).populate('creator', 'firstname lastname fullname').exec(function(err,article) {
		if (err) return next(err);
		if(!article) return next(new Error('Faild to laod article ' + id));

		req.article = article;
		next();
	});
};

exports.read = function(req, res) {
	res.json(req.article);
}

exports.update = function(req, res) {
	var article = req.article;

	article.title = req.body.title;
	article.content = req.body.content;

	article.save(function (err) {
		if (err) {
			res.status(400).send({
				message: getErrorMessages(err)
			});
		} else {
			res.json(article);
		}
	});
};

exports.delete = function(req, res) {
	var article = req.article;

	article.remove(function (err) {
		if (err) {
			res.status(400).send({
				message: getErrorMessages(err)
			});
		} else {
			res.json(article);
		}
	});
};

exports.hasAuthorization = function(req, res, next) {
	if(req.article.creator.id != req.user.id){
		req.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};