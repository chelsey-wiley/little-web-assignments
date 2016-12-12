console.log('script file hooked up!');


var click = document.querySelector('.click');
var stuff = document.querySelector('.stuff');
var box = document.querySelector('.box');

click.addEventListener('click', function(){
  var value = stuff.value;


// 2 ------ var hasE = stringHasE(value);
// alert(hasE);
//
//
// 3 --------if (hasE){
//   box.classList.add('hide');
// }
//
// });
//
// 1 -----  function stringHasE(str){
//   var index = str.indexOf('e');
//   if (index === -1){
//     return false;
//   }
//   else{
//     return true;
//   }
// }
