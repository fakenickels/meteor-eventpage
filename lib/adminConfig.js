AdminConfig = {
	name: 'EventPage',

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
