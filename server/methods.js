Meteor.methods({
	userCount: function(){
		return Meteor.users.find().count();
	}
})