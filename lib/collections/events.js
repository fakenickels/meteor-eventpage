Events = new Mongo.Collection( 'events' );

Events.attachSchema( new SimpleSchema( {
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
	},

	active: {
		type: Boolean,
		label: 'Evento está ativo?'
	},

	count: {
		type: Number,
		label: 'Número de participantes',
		defaultValue: 0
	}
} ) );
