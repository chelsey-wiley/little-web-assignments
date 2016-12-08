console.log('script file hooked up!');

var clickItButton = document.querySelector('.click-it');
var clickThisButton = document.querySelector('.click-this');

clickItButton.addEventListener ('click', function(){
  var cold =document.querySelector ('.cold');
  cold.textContent = "I wish it was warm!";
  cold.classList.toggle('on');
});

clickThisButton.addEventListener ('click', function(){
  var cold =document.querySelector ('.cold');
  cold.textContent = "I wish it was warm!";
  cold.classList.toggle('on');
});
