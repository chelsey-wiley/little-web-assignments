(function(){

var counter = 0;
var decrement = document.querySelector('.decrement');//class must have .
var increment = document.querySelector('.increment');
var display = document.querySelector('.display');
var names = ['Bucephalus', 'Comanche', 'Mareng', 'Copenhagen', 'Sergeant Reckless', 'The Byerley Turk', 'Pinto', 'Beautiful', 'Jim Key']

//add variable in display
display.textContent = names[counter];
//add paramenters event name and function
decrement.addEventListener('click', function(){
  counter--;
  if (counter < 0){
    counter = names.length -1;
  }

  display.textContent= names[counter];
  console.log(counter);
});

//add paramenters event name and function
increment.addEventListener('click', function(){
  counter++;

  if (counter > names.length -1){
    counter = 0;
  }
//counter goes up
  display.textContent= names[counter];
//display the counter
console.log(counter);
});
console.log(counter);

})();
