console.log('hello world')


var nextWhere = document.querySelector('.next-where');

nextWhere.addEventListener('click', function(){
  var show = document.querySelector('.where');
  show.classList.remove('on')
});

var nextWhat = document.querySelector('.next-what');

nextWhat.addEventListener('click', function(){
  var show = document.querySelector('.what');
  show.classList.remove('on')
});
