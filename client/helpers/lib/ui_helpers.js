UI.registerHelper( 'getFbAvatar', function( fbId ) {
	return 'http://graph.facebook.com/' + fbId + '/picture?height=200&type=normal&width=200';
} );

UI.registerHelper( 'isAdmin', function() {
	return Roles.userIsInRole( Meteor.user(), [ 'admin' ] );
} );

UI.registerHelper( 'byGroup', function( opts ) {
	var i = 0,
		arr = opts.hash.arr,
		groupSize = opts.hash.groupSize;
	
	var groups = [];

	if ( !arr && !groupSize && _.isEmpty( arr ) ) return '';
	if ( !_.isArray( arr ) ) arr = arr.fetch();

	_.eachSlice( arr, groupSize, function( group, i ) {
		groups.push( group );
	} );
	
	return groups;
} );

UI.registerHelper( 'getEventBanner', function( eventMain ) {
		if ( eventMain.banner ) {
			image = Images.findOne( eventMain.banner );

			if ( image ) return image.url();
		} else return '';
} );
