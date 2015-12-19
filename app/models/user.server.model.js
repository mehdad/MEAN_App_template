var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName : String,
	lastName : String,
	email : String,
	username : {
		type : String,
		trim : true
	},
	password : String,
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

mongoose.model('User', UserSchema);