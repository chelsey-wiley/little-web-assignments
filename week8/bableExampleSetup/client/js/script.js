(function() {
  console.log('it works!')
var peopleList = document.querySelector('.people-list');

console.log('hello', peopleList);

var people = ['anna', 'mark', 'susie', 'jaquaveus'];

people.forEach(function(name){
  var li = document.createElement('li');
  li.textContent = name;

  peopleList.appendChild (li);
});

peopleList.addEventListener('click', (evt) => {
  console.log('clicked it', evt.target);
});



}());
