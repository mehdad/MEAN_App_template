var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

	module.exports = function () {
		passport.use(new FacebookStrategy({
			clientID: config.facebook.clientID,
			clientSecret: config.facebook.clientSecret,
			callbackURL: config.facebook.callbackURL,
			passReqToCallback: true
		},
		function(req, accessToken, refreshToken, profile,done){
			var providerData = profile_json;
			providerData.accessToken = accessToken;
			providerData.refreshToken = refreshToken;
			var providerUserProfile = {
				firstName: profile.name.givenName,
				lastName: profile.firstName.familyName,
				fullName: profile.displayName,
				email: profile.emails[0].value,
				username: profile.username,
				provider: 'facebook',
				providerId: profile.id,
				providerData: providerData
			};

			users.saveOAuthUserProfile(req, providerUserProfile, done);
		}));
	};