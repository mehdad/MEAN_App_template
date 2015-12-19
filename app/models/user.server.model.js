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
		}
	},
	created :{
		type: Date,
		default: Date.now
	}
});

mongoose.model('User', UserSchema);