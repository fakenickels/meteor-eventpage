Template.home.helpers( {
	fbUnconfigured: function() {
		return (
			_.isEmpty( ServiceConfiguration.configurations.find( { service: 'facebook' } ).fetch() )
		);
	}
} );

Template.home.events( {
	'click .fb-unconfigured .btn': function() {
		Accounts._loginButtonsSession.configureService( 'facebook' );
	},

	'click .event-sign-up-link': function(){
		Meteor.loginWithFacebook(function(err){
			if(!err){
				Router.go('/user')
			}
		});
	}
} );
