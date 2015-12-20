var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName : String,
	lastName : String,
	email : {
		type : String,
		index : true,
		match: /.+\@.+\..+/
	},
	username : {
		type : String,
		trim : true,
		unique : true,
		required : true
	},
	password : {
		type : String,
		validate : [
			function(password){
				return password.length >= 6;
			},
			"Password should be longer"
		]
	},
	role: {
		type : String,
		enum : ['Admin' , 'Owner' , 'User']
	},
	website:{
		type : String,
		set : function(url) {
			if(!url){
				return url;
			}else{
				if(url.indexOf('http://')!==0 && url.indexOf('https://')!==0){
					url= 'http://' + url;
				}
				return url;
			}
		},
		get : function(url) {
			if(!url){
				return url;
			}else{
				if(url.indexOf('http://')!==0 && url.indexOf('https://')!==0){
					url= 'http://' + url;
				}
				return url;
			}
		}
	},
	created :{
		type: Date,
		default: Date.now
	}
});

UserSchema.virtual('fullname').get(function(){
		return this.firstName + ' ' + this.lastName;
	}).set(function(fullname){
		var splitName = fullname.split(' ');
		this.firstName = splitName[0] || '';
		this.lastName = splitName[1] || '';
	});

UserSchema.set('toJSON',{getters : true , virtuals : true});

UserSchema.statics.findOneByUsername = function(username, callback){
	this.findOne({'username': new ReqExp(username , 'i')},callback);
};

UserSchema.methods.authenticate = function(password){
	return this.password === password;
}

UserSchema.pre('save', function(next){
	if (true) {
		next();
	} else{
		next(new Error('An error occured'));
	};
});

UserSchema.post('save',function(next){
	if(this.IsNew){
		console.log('A new user was created.');
	}else{
		console.log('An existing user was updated');
	}
});

mongoose.model('User', UserSchema);