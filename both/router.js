Router.route('home', {
	layoutTemplate: 'HomeLayout',

	path: '/',

	template: 'home',

	waitOn: function(){
		return Meteor.subscribe('events');
	},	

	data: function(){
		if( !this.ready() ){
			return;
		}

		var eventMain = Events.findOne(), image;

		if(eventMain.banner){
			image = Images.findOne(eventMain.banner).url();
		}

		return {
			eventMain: eventMain,
			eventBanner: image,

			speakers: [
				{name: 'Gabriel Rubens'}
			],

			courses: [
				{name: 'Using Sun Overdrive'}
			]			
		}		
	}
});
