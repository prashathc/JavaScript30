const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

function strip (bandName) {
	return bandName.toString().replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(b) > strip(a) ? 1 : -1));

console.table(sortedBands);

// * Steps to do this activity
// TODO Detect if first word in band name is "A", "An", "The"
// TODO If it is the first word, then remove it
// TODO Then sort the entire array
// TODO Then if one of those words were removed, add it back
// TODO Then display the arrays on page
