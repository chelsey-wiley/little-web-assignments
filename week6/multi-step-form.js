console.log('hello world')

var next1 = document.querySelector('.who .next');
var next2 = document.querySelector('.where .next');
var back2 = document.querySelector('.where .back');
var back3 = document.querySelector('.what .back');

var firstNameInput = document.querySelector('.first-name');
var lastNameInput = document.querySelector('.last-name');
var radioInput = document.querySelector('.radio-selectors')
var responseInput = document.querySelector('.response')



next1.addEventListener('click', function(evt) {

  var firstIsOk = checkForValue(evt, firstNameInput);
  var lastIsOk= checkForValue(evt, lastNameInput);
  var radioClicked = checkForValue(evt,radioInput);

  console.log('click')
  if (firstIsOk && lastIsOk) {
    hideTheDiv();
    show('.where');
  }

});

next2.addEventListener('click', function(){
  hideTheDiv();
  show('.what');
});

back2.addEventListener('click', function(){
  hideTheDiv();
  show('.who');
});

back3.addEventListener('click', function(){
  hideTheDiv();
  show('.where');
});

function hideTheDiv(){
  var showing = document.querySelector('.showing');
  showing.classList.remove('showing');
}

function show(selector){
  var thing = document.querySelector(selector);
  thing.classList.add('showing');
}


var localStorageValue = localStorage.getItem('.who')
