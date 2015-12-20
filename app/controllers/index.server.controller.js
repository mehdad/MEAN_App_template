exports.render =function(req,res){
	if(req.session.lastvisitssss){
		console.log(req.session.lastvisitssss);
	}
	req.session.lastvisitssss ='session is:' + new Date();

	res.render('index', { 
		title: 'Hello World.This is Just A test',
		userFullname: req.user ? req.user.fullname : ''
	});
};