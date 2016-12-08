console.log('script file hooked up!');

var clickItButton = document.querySelector('.click-it');
var clickThisButton = document.querySelector('.click-this');
var cold = document.querySelector ('.cold');

clickItButton.addEventListener ('click', function(){
  namedChangeIt(); // -- FUNCTION CALLED HERE
  // var cold =document.querySelector ('.cold'); -- MOVE VARIABLE
  // cold.textContent = "I wish it was warm!"; -- CREATE FUNCTION
  // cold.classList.toggle('on'); -- CREATED FUNCTION
});

clickThisButton.addEventListener ('click', function(){
  namedChangeIt(); // -- FUNCTION CALLED HERE
  // var cold =document.querySelector ('.cold'); -- MOVE VARIABLE
  // cold.textContent = "I wish it was warm!"; -- CREATE FUNCTION
  // cold.classList.toggle('on'); -- CREATE FUNCTION
});

function namedChangeIt(){
  cold.textContent = "I wish it was warm!";
  cold.classList.toggle('on');
};
