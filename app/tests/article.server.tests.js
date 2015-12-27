var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Article = mongoose.model('Article');

var user, article;

describe('Article Model Unit Test:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName : 'Full',
			lasstName : 'Name',
			displayName : 'Full name',
			email : 'test@test.com',
			username : 'username',
			passwprd : 'passwprd'
		});

		user.save(function() {
			article = new Article({
				title : 'Article Title',
				content : 'Article Content',
				user : user
			});
			done();
		});
	});

	describe('Testing The save method', function() {
		it('Should be able to save without problems', function() {
			article.save(function(err) {
				should.not.exist(err);
			});
		});

		it('Should not be able to save an atricle without title', function(){
			article.title = '';
			article.save(function(err){
				should.exist(err);
			});
		});
	});

	afterEach(function (done) {
		Article.remove(function(){
			User.remove(function(){
				done();
			});
		});
	});
});