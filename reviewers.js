var _ = require('underscore');

var 
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
	jack = { name: 'jack', manager: brian };

var people = [
	joe,
	dennis,
	ryan,
	boris,
	brian,
	patrick,
	dmitriy,
	avneet,
	michael,
	kiran,
	bai,
	jack
];

_(people).each(function (person) {
	console.log(person.name+' reviewed by:');
	_.chain(people)
		.reject(function (p) { return p == person || p == person.manager; })
		.shuffle()
		.first(4)
		.each(function (p) { console.log(' - '+p.name); });
});