var button = document.querySelector('#button-change-it');

function changeThatText() {
  var thatP = document.querySelector('#changeable-message');
  thatP.textContent = 'Whoah, I changed it';
}

button.addEventListener('click', changeThatText);
