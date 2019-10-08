// start with strings, numbers and booleans
let age = 100;
let age2 = age;

console.log(age, age2);
age2 = 5;
console.log(age, age2);

let name = 'Lebron';
let name2 = name;

console.log(name, name2);
name2 = 'Dwyane';
console.log(name, name2);

// Let's say we have an array
const players = [ 'Kyle', 'Kawhi', 'Lebron' ];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players;
console.log(players, team);

// however what happens when we update that array?
team.push('Kobe');
console.log(players, team);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2.push('JAVALE MCGEE');
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3.push('Jamario Mooooooon');
console.log(players, team3);

// Array.from
const team5 = Array.from(players);
team5.push('Zboooo');
console.log(players, team5);

// or use the new ES6 Spread
const team4 = [ ...players ];
team4.push('Lil Jon');
console.log(players, team4);

// with Objects
const goat = {
	name : 'Michael Jordan',
	age  : 50
};

// how do we take a copy instead?
const goatDetails = Object.assign({}, goat, { number: 23 });
console.log(goat);
console.log(goatDetails);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const torontoRaps = {
	coach   : 'Nurse',
	owner   : 'MLSE',
	gm      : 'Masai',
	players : {
		leader : 'lowry',
		og     : 'marc'
	}
};

const nba = Object.assign({}, torontoRaps);

console.log(torontoRaps);
console.log(nba);

// works fine
nba.coach = 'Stackhouse';
console.log(torontoRaps);
console.log(nba);

// two levels deep, does not work fine, changes both levels
nba.players.leader = 'Lebron';
console.log(torontoRaps);
console.log(nba);

// you can use this method to clone multiple levels deeep
const nbaDeepClone = JSON.parse(JSON.stringify(torontoRaps));
nbaDeepClone.players.leader = 'Larry Bird';
console.log(torontoRaps);
console.log(nbaDeepClone);
