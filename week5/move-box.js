var rightButton = document.querySelector ('#click-right');
var leftButton = document.querySelector ('#click-left');
var left = 0;

rightButton.addEventListener('click', function(){
  var box = document.querySelector('.box');
  left += 50;
  box.style.left = left + 'px';
});

leftButton.addEventListener('click', function(){
  var box = document.querySelector('.box');
  left -= 50;
  box.style.left = left + 'px';


});
