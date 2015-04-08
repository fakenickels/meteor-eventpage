Events.permit( [ 'insert', 'update', 'remove' ] ).ifHasRole( 'admin' ).apply();
Courses.permit( [ 'insert', 'update', 'remove' ] ).ifHasRole( 'admin' ).apply();
Speakers.permit( [ 'insert', 'update', 'remove' ] ).ifHasRole( 'admin' ).apply();
Images.files.permit( [ 'insert', 'update', 'remove' ] ).ifHasRole( 'admin' ).apply();

Images.allow( {
	download: function( userId, doc ) {
		return true;
	}
} );
