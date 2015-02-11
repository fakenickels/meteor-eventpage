Speakers = new Meteor.Collection('speakers');

Speakers.attachSchema(new SimpleSchema({
	fbId: {
		type: String,
		label: 'Usuario',

		autoform: {
			options: function(){
				var	users = _.reject(Meteor.users.find().fetch(), function(user){
					var profile = user.services.facebook;

					return Speakers.findOne({fbId: profile.id});
				});

				return 	_.map( users, function(user){
					var profile = user.services.facebook;

					return { 
						label: profile.name,
						value: profile.id 
					}
				});
			}
		}
	},

	name: {
		type: String,
		label: 'Nome'
	},

	shortbio: {
		type: String,
		max: 200,
		label: 'Bio curta'
	}
}));