console.log('script file hooked up!');

var clickItButton = document.querySelector('.click-it');
var clickThisButton = document.querySelector('.click-this');
var cold = document.querySelector ('.cold');


clickItButton.addEventListener ('click', function(){
  changeIt()
});

clickThisButton.addEventListener ('click', function(){
  changeIt()
});

function changeIt(){
  cold.textContent = "I wish it was warm!";
  cold.classList.toggle('on');
}
