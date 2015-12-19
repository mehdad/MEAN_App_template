var User = require('mongoose').model('User');

exports.create = function(req,res,next){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return next(err);
		}else{
			res.json(user);
		}
	});
};

exports.list = function (req,res,next){
	User.find({},'username email',{ 
			skip: 1,
			limit: 2
		}, function(err, users){
		if(err) {
			return next(err);
		}else{
			res.json(users);
		}
	});
};