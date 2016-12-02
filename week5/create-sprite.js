var runner = document.querySelector ('.run');

var position = 1
var direction = 'right';

setInterval(function(){
  switch(position){
    case 1:
      //forward
      runner.classList.add('pos-1');
      //back || add 1 to 1
      runner.classList.remove('pos-2');
    break;

    case 2:
      //forward
      runner.classList.remove('pos-1');

      runner.classList.add('pos-2');
      //back || add 2 to 2
      runner.classList.remove('pos-3');
    break;

    case 3:
      //forward
      runner.classList.remove('pos-2');

      runner.classList.add('pos-3');
      //back || add 3 to 3
      runner.classList.remove('pos-4');
    break;

    case 4:
      //forward
      runner.classList.remove('pos-3');

      runner.classList.add('pos-4');
      //back || add 4 to 4
      runner.classList.remove('pos-5');
    break;

    case 5:
      //forward
      runner.classList.remove('pos-4');
      runner.classList.add('pos-5');

      //back nothing is removed || add 5 to t
    break;
  }
  if(direction === 'right'){
    position += 1;
  }
  else {
    position -= 1;
  }
  if (position >= 5){
    direction ='left';
  }
  else if (position <= 1){
    direction ='right'
  }
}, 200);
