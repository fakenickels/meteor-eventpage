Meteor.publish('userData', function(){
	if(this.userId){
		return Meteor.users.find({
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
		})
	} else {
		this.ready();
	}
});

Meteor.publish(null, function(){
	return Images.find({});
});

Meteor.publish('events', function(){
	return Events.find({});
});

Meteor.publish(null, function(){
	return Courses.find({});
});

Meteor.publish(null, function(){
	return Speakers.find({});
});