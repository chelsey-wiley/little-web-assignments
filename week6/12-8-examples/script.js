console.log('script file hooked up!');

var clickItButton = document.querySelector('.click-it');
var clickThisButton = document.querySelector('.click-this');
var cold = document.querySelector ('.cold');


clickItButton.addEventListener ('click', function(){
theMessage("text here");
});

clickThisButton.addEventListener ('click', function(){
theMessage("text here too");
});

function theMessage (messageHere){
  cold.textCotent = messageHere;
  cold.classList.toggle('on');
}
