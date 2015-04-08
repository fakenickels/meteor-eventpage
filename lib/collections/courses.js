Courses = new Meteor.Collection( 'courses' );

Courses.attachSchema( new SimpleSchema( {
	name: {
		type: String,
		label: 'Nome'
	},

	when: {
		type: Date,
		label: 'Quando'
	},

	duration: {
		type: String,
		label: 'Duraçao'
	},

	description: {
		type: String,
		label: 'Descriçao'
	},

	speaker: {
		type: String,
		label: 'Palestrante',

		autoform: {
			options: function() {
				var speakers = Speakers.find().fetch();
				return _.map( speakers, function( speaker ) {
					return {
						value: speaker._id, 
						label: speaker.name
					}
				} );
			}
		}
	}
} ) );
