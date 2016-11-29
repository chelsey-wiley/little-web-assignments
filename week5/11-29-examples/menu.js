
var theMenu = document.querySelector('.regular-menu');
//console.log('the menu', theMenu);

theMenu.addEventListener('click', function(evt) {
  console.log('clicked', evt.target, evt.target.tagName);

  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('clicked');}
});

var newMenu = document.querySelector('.clicked');



// //get a variable of all the things (via querySelector) that are clicked. Add a click event to toggle or remove the styling
