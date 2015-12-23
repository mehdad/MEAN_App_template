exports.render =function(req,res){
	if(req.session.lastvisitssss){
		console.log(req.session.lastvisit);
	}
	req.session.lastvisit ='session is:' + new Date();

	res.render('index', { 
		title: 'Hello World.This is Just A test',
		userFullname: req.user ? req.user.fullname : '',
		user: JSON.stringify(req.user)
	});
};