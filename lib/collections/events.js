Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nome'
	},

	theme: {
		type: String,
		label: 'Tema'
	},

	description:{
		type: String,
		label: 'Descriçao',
		optional: true
	},

	where: {
		type: String,
		label: 'Onde'
	},

	when: {
		type: String,
		label: 'Quando'		
	},

	whenDate: {
		type: Date,
		label: 'Quando mermu'
	},

	banner: {
		type: String,
		label: 'Banner',
		optional: true,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		}
	} 
}));