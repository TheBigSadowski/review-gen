var _ = require('underscore');

var people = [
	joe = { name: 'joe' },
	dennis = { name: 'dennis', manager: joe },
	ryan = { name: 'ryan', manager: joe },
	boris = { name: 'boris' },
	brian = { name: 'brian' },
	kiran = { name: 'kiran' },
	patrick = { name: 'patrick', manager: kiran },
	dmitriy = { name: 'dmitriy' },
	avneet = { name: 'avneet' },
	michael = { name: 'michael' },
	bai = { name: 'bai', manager: brian },
	jack = { name: 'jack', manager: brian }
];

_(people).each(function (p) { p.reviews = 0; });

_(people).each(function (person) {
	console.log(person.name+' reviewed by:');
	_.chain(people)
		.reject(function (p) { return p == person || p == person.manager; })
		.shuffle()
		.sortBy(function (p) { return p.reviews; }) // evenly distribute the reviews
		.first(4)
		.each(function (p) { p.reviews = (p.reviews||0) + 1; console.log(' - '+p.name); });
});
