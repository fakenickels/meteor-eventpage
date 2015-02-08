Courses = new Meteor.Collection('courses');

Courses.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nome'
	},

	when: {
		type: String,
		label: 'Quando'
	},

	duration: {
		type: String,
		label: 'Duraçao'
	},

	description: {
		type: String,
		label: 'Descriçao',
		optional: true
	}
}));