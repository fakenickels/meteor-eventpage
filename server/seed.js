var admin = Meteor.users.findOne();
if( admin ){	
	if( !Meteor.roles.findOne({name: 'admin'}) ) {
		Roles.createRole('admin');
	}

	if( !Roles.userIsInRole(admin, ['admin'])){
		Roles.addUsersToRoles(admin._id, ['admin']);
	}
}

Meteor.startup(function(){
	var event_main = Events.findOne();

	if(!event_main){
		Events.insert({
			name: 'Evento',
			theme: 'Tema do evento',
			where: 'Av. do Evento',
			when: '00 de algum mes',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		});	
	}
});