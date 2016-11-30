(function(){

var names = ['Bucephalus', 'Comanche', 'Mareng', 'Copenhagen', 'Sergeant Reckless', 'The Byerley Turk', 'Pinto', 'Beautiful', 'Jim Key']
var counter = 0;
var decrement = document.querySelector('.decrement');
var increment = document.querySelector('.increment');
var display = document.querySelector('.display');

function updateDisplay(){
  display.textContent = 'Hello, ' + names[counter] + '!';
}
//^ Created a function to update the

updateDisplay();
//display.textContent = names[counter];

decrement.addEventListener('click', function(){
  counter--;
  if (counter < 0){
    counter = names.length -1;
  }

  updateDisplay();
  //display.textContent = names[counter];
});


increment.addEventListener('click', function(){
  counter++;

  if (counter > names.length -1){
    counter = 0;
  }

/*Or you can:
if(position === name.length -1){
positon = 0;
}

else {
position ++;
}
*/

  updateDisplay();
  //display.textContent = names[counter];
  
//display the counter
console.log(counter);
});
console.log(counter);

})();

/*
1. add array of names to variable.
2. variable = document.querySelector('.classname')
---> add this for the buttons and the display
3. set counter to 0 as a starting point
--->better name for counter is position
4. display.textContent = names[counter]
5. addEventListener to the class you want to click on. using a click function
*/
