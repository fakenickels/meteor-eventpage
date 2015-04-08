Meteor.startup( function() {
	var eventMain = Events.findOne();

	if ( !eventMain ) {
		Events.insert( {
			name: 'Evento',
			theme: 'Tema do evento',
			where: 'Av. do Evento',
			when: '00 de algum mes',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		} );	
	}

	var firstUser = Meteor.users.findOne( {}, { sort: { createdAt: 1 } } );

	if ( !_.isEmpty( firstUser ) ) {
		if ( !Roles.userIsInRole( firstUser._id, 'admin' ) ) {
			console.log( 'First user is admin' );
			Roles.addUsersToRoles( firstUser._id, [ 'admin' ] );
		}
	}
} );
