AdminConfig = {
	name: 'EventPage',
	
	dashboard: {
		skin: 'black'
	},

	collections: {
		Events: {},
		
		Speakers: {
			tableColumns: [
				{
					label: 'Nome',
					name: 'name'
				},

				{
					label: 'Bio curta',
					name: 'shortbio'
				}
			]
		},

		Courses: {}
	}
};
