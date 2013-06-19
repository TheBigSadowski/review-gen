var _ = require('underscore');

var numberOfReviews = 4;

var people = [
	joe = { name: 'joe' },
	brian = { name: 'brian' },
	kiran = { name: 'kiran' },
	dennis = { name: 'dennis', manager: joe },
	ryan = { name: 'ryan', manager: joe },
	boris = { name: 'boris' },
	patrick = { name: 'patrick', manager: kiran },
	dmitriy = { name: 'dmitriy' },
	avneet = { name: 'avneet' },
	michael = { name: 'michael' },
	bai = { name: 'bai', manager: brian },
	jack = { name: 'jack', manager: brian }
];

var determineReviews = function () {
	_(people).each(function (p) { p.reviews = []; });

	_.chain(people).shuffle().each(function (person) {
		_.chain(people)
			.reject(function (p) { return p == person || p == person.manager; })
			.shuffle()
			.sortBy(function (p) { return p.reviews.length; }) // try to evenly distribute the reviews
			.first(numberOfReviews)
			.each(function (p) { p.reviews.push(person); });
	});	
};

var reviewsAreUnevenlyDistributed = function () {
	return _.any(people, function (p) {
		return p.reviews.length != numberOfReviews;
	});
};

do {
	determineReviews();
	console.log('unfair review distribution trying again...');
} while (reviewsAreUnevenlyDistributed());
	
_.each(people, function (p) {
	console.log(p.name+' writes reviews for:');
	_.each(p.reviews, function (r) {
		console.log(' - '+r.name);
	});
});
