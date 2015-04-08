Template.header.events( {
	'click .login-button': function() {
		if ( Meteor.user() ) {
			Meteor.logout();
		} else {
			Meteor.loginWithFacebook();
		}
	}
} )
