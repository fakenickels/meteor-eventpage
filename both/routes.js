Router.route( 'home', {
	layoutTemplate: 'HomeLayout',
	loadingTemplate: 'loading',
	path: '/',
	template: 'home',

	waitOn: function() {
		return [ 
			Meteor.subscribe( 'events' ),
			Meteor.subscribe( 'images' ),
			Meteor.subscribe( 'courses' ),
			Meteor.subscribe( 'speakers' )
		];
	},	

	data: function() {
		if ( !this.ready() ) return;

		return {
			eventMain: Events.findOne(),

			speakers: Speakers.find(),

			courses: Courses.find(),

			socialMedia: [
				{
					url: 'https://www.facebook.com/grubens1',
					icon: 'facebook'
				},

				{
					url: 'https://www.github.com/grubens1/meteor-eventpage',
					icon: 'github'
				}
			]			
		}		
	}
} );
