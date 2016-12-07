console.log('hello world')

var next1 = document.querySelector('.who .next');
var next2 = document.querySelector('.where .next');
var back2 = document.querySelector('.where .back');
var back3 = document.querySelector('.what .back');

next1.addEventListener('click', function(){
  hideTheDiv();
  show('.where');
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












//
// var nextWhere = document.querySelector('.next-where');
//
// nextWhere.addEventListener('click', function(){
//   var show = document.querySelector('.where');
//   show.classList.remove('on')
// });
//
// var nextWhat = document.querySelector('.next-what');
//
// nextWhat.addEventListener('click', function(){
//   var show = document.querySelector('.what');
//   show.classList.remove('on')
// });
