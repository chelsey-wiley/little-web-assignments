console.log('this is the document', window.document);

console.log('counting body children', document.body.children.length);

console.log('second child', document.body.children[1]);

console.log('example', document.body.children[2]);

var getIt = document.getElementById('add-it');
console.log('paragraph', getIt)

//change text
var topHead = document.getElementById('changing-header');
topHead.textContent = 'Manipulated';


//change text with querySelector
var listChange = document.querySelectorAll('section li');
console.log('this is the list', listChange)

for (var i = 0; i < listChange.length; i++) {
  var myList= listChange[i];
  myList.textContent = 'Chocolate';
}

var hateList = document.querySelector('#hate-list');
console.log('hate list goes here', hateList.children);

for (var i = 0; i < hateList.children.length; i++) {
  var childList = hateList.children[i];
  childList.textContent = 'did it work?';
}


var thisSection = document.querySelector('#this-section');

thisSection.innerHTML = '<p>I added this stuff</p>';


var newList = document.querySelector('#list-i-added');

var str = '<p>This list is added</p><ul>';

var listStuff = ['stuff 1', 'stuff 2', 'stuff 3', 'stuff 4'];

for (var i = 0; i < listStuff.length; i++) {
  str+= '<li>' + listStuff[i] + '</li>';
}

str += '</ul>';

newList.innerHTML = str;
console.log('here we go', newList)

//first click event
var clickIt = document.querySelector('#try-it');

function beenClicked(){
  console.log('yup it was clicked');
}

clickIt.addEventListener('click', beenClicked);


//replaced text on click
var changePara = document.querySelector('.changed-para');

changePara.addEventListener('click', clicky)


function clicky(evt){
  evt.target.textContent = "ya clicked me";

var stuffHere = document.querySelector('.changed-para');
stuffHere.innerHTML = '<p>It worked!!!!.</p>'
}



//
