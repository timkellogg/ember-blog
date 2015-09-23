import Ember from 'ember';

	var articles = [
		{
			id: 1,
		  title: "Times in the Rain",
			categories: ['programming', 'weather'],
			body: 'This is the body of the first article',
			comments: ''
		}, 
		{
			id: 2,
		  title: "The cool kids ran away",
		  categories: ['awesome', 'posum'],
		  body: 'This is the body of the second article',
		  comments: ''
		}
	];

export default Ember.Route.extend({
	model() {
		return articles;
	}
});
