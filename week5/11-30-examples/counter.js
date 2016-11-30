(function(){

var counter = 0;
var decrement = document.querySelector('.decrement');//class must have .
var increment = document.querySelector('.increment');
var display = document.querySelector('.display');


//add variable in display
display.textContent = counter;
//add paramenters event name and function
decrement.addEventListener('click', function(){
  counter--;
  display.textContent= names;
});

//add paramenters event name and function
increment.addEventListener('click', function(){
  counter++;
//counter goes up
  display.textContent= counter;
//display the counter
});


})();
