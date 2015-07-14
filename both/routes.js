EventController = RouteController.extend({
	layoutTemplate: 'HomeLayout',
	loadingTemplate: 'loading'
});

if(Meteor.isClient){
	Router.plugin('seo');
}

Router.route( 'home', {
	controller: 'EventController',
	path: '/',
	template: 'home',

	seo: {
		title: function(){
			return this.data().eventMain.name;
		}, 

		suffix: function(){
			console.log(this.data().eventMain.theme);
			return this.data().eventMain.theme;
		},

		separator: '|',

		description: function(){
			return this.data().eventMain.description;
		},

		image: function(){
			var banner = this.data().eventMain.banner;
			if ( banner ) {
				image = Images.findOne( banner );

				if ( image ) return image.url();
			} else return;			
		},

		og: {
			type: 'homepage'
		}
	},

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
			eventMain: Events.findOne({active: true}),

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

Router.route('ingress-message', {
	controller: 'EventController',
	path: '/user',
	template: 'ingressMessage'
});