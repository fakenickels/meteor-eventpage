Router.route('home', {
	layoutTemplate: 'HomeLayout',
	
	loadingTemplate: 'loading',

	path: '/',

	template: 'home',

	waitOn: function(){
		return [ 
			Meteor.subscribe('events'),
			Meteor.subscribe('images'),
			Meteor.subscribe('courses'),
			Meteor.subscribe('speakers')
		];
	},	

	data: function(){
		if( !this.ready() ) return;
		var eventMain = Events.findOne(), image;

		if(eventMain){
			if(eventMain.banner) image = Images.findOne(eventMain.banner).url();
		}

		return {
			eventMain: eventMain,
			eventBanner: image,

			speakers: Speakers.find(),

			courses: [
				{name: 'Using Sun Overdrive'}
			],

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
});
