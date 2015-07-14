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
