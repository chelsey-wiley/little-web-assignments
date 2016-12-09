console.log('script file hooked up!');


var click = document.querySelector('.click');
var stuff = document.querySelector('.stuff');
var box = document.querySelector('.box');

click.addEventListener('click', function(){
  var value = stuff.value;

var hasE = stringHasE(value);
alert(hasE);


if (hasE){
  box.classList.add('hide');
}

});

function stringHasE(str){
  var index = str.indexOf('e');
  if (index === -1){
    return false;
  }
  else{
    return true;
  }
}
