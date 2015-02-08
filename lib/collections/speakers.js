Speakers = new Meteor.Collection('speakers');

Speakers.attachSchema(new SimpleSchema({
	user_id: {
		type: Number,
		label: 'User'
	},

	shortbio: {
		type: String,
		max: 200,
		label: 'Bio curta'
	}
}));