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

// yogben:admin don't know how to deal with a user doc that 
// don't have an ´emails´ field, so I had to assure the creation of it.
Meteor.users.before.insert(function(uid, doc){
	doc.emails = [{
		email: doc.services.facebook.email,
		verified: true
	}];
});

Meteor.users.after.remove(function(){
	Events.update({
		active: true
	}, {
		$inc: {
			count: -1
		}
	});
});