(function(){


var localStorageValue = localStorage.getItem('counter');


var counter = 0;
  if (localStorageValue !== null) {
    counter = Number(localStorageValue);
  }


var decrement = document.querySelector('.decrement');
var increment = document.querySelector('.increment');
var display = document.querySelector('.display');

display.textContent = counter;

decrement.addEventListener('click', function(){
  counter--;
  display.textContent= counter;
  localStorage.setItem('counter', counter);
});

increment.addEventListener('click', function(){
  counter++;
  display.textContent= counter;
  localStorage.setItem('counter', counter);
});


})();
