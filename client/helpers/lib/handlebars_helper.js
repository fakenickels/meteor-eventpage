Handlebars.registerHelper('getUserAvatar', function( user ){
	return "http://graph.facebook.com/" + user.services.facebook.id + "/picture?height=200&type=normal&width=200"
});

Handlebars.registerHelper('isAdmin', function(){
	return Roles.userIsInRole(Meteor.user(), ['admin']);
});

Handlebars.registerHelper('event_main', function(){
	return Events.findOne();
});

Handlebars.registerHelper('speakers', function(){
	return Speakers.find().fetch();
})

Handlebars.registerHelper('eachSlice', function(arr, groupSize, options){
	var out = '';

	console.log(arguments);

	if(!arr) return;

	_.eachSlice(arr, groupSize, function(group, i){
		out += options.fn({ group: group });
	});
	
	return out;
});
