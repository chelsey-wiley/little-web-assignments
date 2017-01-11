console.log('canvas hooked up')

var canvas1 = document.querySelector('#canvas1');
var context = canvas1.getContext('2d');

//give fillRect it a x, y, width, height
//fills whole shape colored and fills ina direct line without stroke
//stroke outline of shape

//style must be in quotes
context.fillStyle = 'red';

// context.fillRect(20, 20, 100, 100);
// context.strokeRect(20, 20, 100, 100);

context.strokeRect(0, 0, 200, 200);
//create bar in bar graph

context.fillRect(20, 100, 50, 100);

context.fillStyle = 'green';

context.fillRect (120, 50, 50, 150);


//paths give a path define a shape
context.lineWidth = 2;

context.beginPath();
//move to = get pen to paper
context.moveTo(210, 250);
context.lineTo(280, 260);
context.lineTo(80, 380);
context.closePath();
//paths invisible until I stroke
context.fill();
context.stroke();


context.fillStyle = 'pink';
//x,y, radius, degrees, to degrees, boolean (deafult is false = clockwise so true draws counter-clockwise)
context.beginPath();
context.arc(50, 300, 30, 0.5* Math.PI, 1 *Math.PI, true);
context.lineTo(50, 300);
context.closePath();
context.fill();
context.stroke();



//small piece of pie chart;
context.fillStyle= 'orange';
context.beginPath();
context.arc(50, 300, 30, 0.5* Math.PI, 1 *Math.PI, false);
context.lineTo(50, 300);
context.closePath();
context.fill();
context.stroke();


var canvas2 = document.querySelector('#canvas2');
var context2 = canvas2.getContext('2d');
context2.fillStyle = 'blue';


var x = 0;
var direction = 'right';

setInterval(function(){
    if(direction ==='right'){
      x += 1;
    }
    else{
        x -= 1;
    }
    if (x===400){
      direction = 'left'
    }
    else if (x===0){
      direction = 'right'
    }

  context2.clearRect(0, 0, 400, 400);
  context2.beginPath();
  context2.arc(x, 100, 25, 0, 2 *Math.PI);
  context2.fill();
},.5);
