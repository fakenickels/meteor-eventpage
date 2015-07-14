Meteor.users.helpers({
	isAdmin: function(){
		return Roles.isUserInRoles(this._id, ['admin']);
	}
});