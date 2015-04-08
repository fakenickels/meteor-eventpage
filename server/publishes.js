Meteor.publish( 'userData', function() {
	if ( this.userId ) {
		return Meteor.users.find( {
			_id: this.userId,
		},
		{	fields: {
				username: 1,
				email: 1,
				profile: 1,
				speaker: 1,
				admin: 1,
				services: 1
			}
		} )
	} else {
		this.ready();
	}
} );

Meteor.publish( 'images', function() {
	return Images.find( {} );
} );

Meteor.publish( 'events', function() {
	return Events.find( {} );
} );

Meteor.publish( 'courses', function() {
	return Courses.find( {} );
} );

Meteor.publish( 'speakers', function() {
	return Speakers.find( {} );
} );
