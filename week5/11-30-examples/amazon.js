console.log('hi')
var clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', function() {
  console.log('click gusto')

  var readThis = document.querySelector('.read-this');
//This grabs the HTML dom element with class name of read this

  readThis.classList.toggle('show-this')
  
});

//class list = mangager of dom element classes
