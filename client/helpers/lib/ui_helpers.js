UI.registerHelper('getFbAvatar', function( fbId ){
	return "http://graph.facebook.com/" + fbId + "/picture?height=200&type=normal&width=200";
});

UI.registerHelper('isAdmin', function(){
	return Roles.userIsInRole(Meteor.user(), ['admin']);
});

UI.registerHelper('byGroup', function(opts){
	var i = 0,
		arr = opts.hash.arr,
		groupSize = opts.hash.groupSize;
	
	var groups = [];

	if(!arr && !groupSize && _.isEmpty(arr)) return '';

	_.eachSlice(arr, groupSize, function(group, i){
		groups.push(group);
	});
	
	return groups;
});