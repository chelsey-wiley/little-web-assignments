var monster = document.querySelector('.monster');

var position = 1;
var direction = 'right';

setInterval(function() {

  switch (position) {
    case 1:
      //Going forward
      monster.classList.add('pos-1');

      //Going back
      monster.classList.remove('pos-2');
      break;

    case 2:
      //Going forward
      monster.classList.remove('pos-1');
      monster.classList.add('pos-2');
      //Going back
      monster.classList.remove('pos-3');
      break;

    case 3:
      //Going forward
      monster.classList.remove('pos-2');
      monster.classList.add('pos-3');

      //Going back
      //last one I don't remove anything
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
