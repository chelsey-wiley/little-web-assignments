var people = ['joe', 'bob','annie','mable', 'chris', 'enuice'];
var ranPeople = [];

var randomPersonIndex = Math.random();
randomPersonIndex = randomPersonIndex * people.length;
randomPersonIndex = Math.floor(randomPersonIndex);
var person = people.splice(randomPersonIndex, 1);

console.log ('your person is', person);
