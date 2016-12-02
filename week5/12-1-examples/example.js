var monster = document.querySelector('.monster');

var position = 1;
var direction = 'right';

setInterval(function() {

  switch (position) {
    case 1:
      //console.log('position 1');
      monster.classList.remove('pos-2');
      monster.classList.add('pos-1');
      break;
    case 2:
      //console.log('position 2');
      monster.classList.remove('pos-1');
      monster.classList.remove('pos-3');
      monster.classList.add('pos-2');
      break;
    case 3:
      //console.log('position 3');
      monster.classList.remove('pos-2');
      monster.classList.add('pos-3');
      break;
  }

  if (direction === 'right') {
    position += 1;
  }
  else {
    position -= 1;
  }
  console.log('the position is ', position);

  if (position >= 3) {
    direction = 'left';
  }
  else if (position <= 1) {
    direction = 'right';
  }

}, 500);
