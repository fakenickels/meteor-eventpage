Meteor.startup( function() {
	var eventMain = Events.findOne();

	if ( !eventMain ) {
		Events.insert( {
			name: 'Evento',
			theme: 'Tema do evento',
			where: 'Av. do Evento',
			when: '00 de algum mes',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			active: true,
			count: 0
		} );	
	}
} );

Meteor.users.after.insert(function(uid, doc){
	if ( Meteor.users.find().count() === 1 ) {
		Roles.addUsersToRoles( doc._id, [ 'admin' ] );
	}

	Events.update({
		active: true
	}, {
		$inc: {
			count: 1
		}
	});

	return true;
});