console.log('script file hooked up!');

var clickItButton = document.querySelector('.click-it');
var clickThisButton = document.querySelector('.click-this');
var cold =document.querySelector ('.cold');


clickItButton.addEventListener ('click', function(){
  theMessage("Burrr it's cold");

});

clickThisButton.addEventListener ('click', function(){
  theMessage("I wish it was warm");

});

function theMessage(placeholder){
  cold.textContent = placeholder;
  cold.classList.toggle('on');
}
