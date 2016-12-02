var theList = document.querySelector('#the-list');
console.log('it works')

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

function updateList(){

for (var i = 0; i < groceryList.length; i++) {
  var thing = document.createElement('LI');
  thing.textContent = groceryList[i];
  theList.appendChild(thing);
  };
};

updateList();
