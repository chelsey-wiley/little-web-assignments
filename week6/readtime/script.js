console.log('script file hooked up!');

var para =document.querySelectorAll("p");
var readTime = document.querySelector('.readtime');


var sum = 0;

for (var i = 0; i < para.length; i++) {
  var theArray = para[i].textContent.split(" ");
  sum = sum + theArray.length;
}

var result = Math.floor(sum/300)
readTime.textContent =result;
console.log(result);
