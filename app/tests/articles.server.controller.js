var app = require('../../server.js'),
	request = require('supertest'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Article = mongoose.model('Article');

var user, article;

describe('Article Controller Unit Tests:', function() {
	before(function (done) {
		user = User({
			firstName : 'Full',
			lastName : 'Name',
			fullName : 'Full name',
			email : 'test@test.com',
			username : 'username',
			password : 'password'
		});

		user.save(function(){
			article = new Article({
				title : 'Article Title',
				content : 'Article Content',
				user : user
			});

			article.save(function(){
				done();
			});
		});
	});

	describe('Testing the GET method', function(){
		it('Should be able to get the list of articles', function(){
			request(app).get('/api/artilces/')
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function (err, res) {
				res.body.should.be.an.Array.and.have.lengthOf(1);
				res.body[0].should.have.property('title', article.title);
				res.body[0].should.have.property('content', article.content);
				done();
			});
		});

		it('Should be able to get an specefic artilce', function (){
			request(app).get('/api/artilces/' + article.id)
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function (err, res) {
				res.body.should.be.an.Object.and.have.property('title', article.title);
				res.body.should.have.property('content',article.content);
				done();
			});
		});
	});

	after(function (done) {
		Article.remove().exec();
		User.remove().exec();
		done();
	});
});
