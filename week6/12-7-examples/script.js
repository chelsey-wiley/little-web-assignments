console.log('script file hooked up!');

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(evt){

var firstName = document.querySelector('.first-name');


  if (firstName.value === ''){
    evt.preventDefault();
    firstName.classList.add('no-good');
  }
  else {
    firstName.classList.remove('no-good');
  }

var lastName = document.querySelector('.last-name');

  if (lastName.value === ''){
    evt.preventDefault();
    lastName.classList.add('no-good');
  }
  else {
    lastName.classList.remove('no-good');
  }

var bio =document.querySelector('.bio');

if (bio.value.length) < 20 {
  evt.preventDefault();
  bio.classList.add('no-good')
}

  function wrongField (evt, placeHolder){
    evt.preventDefault
    placeHolder.classList.add('no-good');
  }
});





var googleLink = document.querySelector('.google-link');

googleLink.addEventListener('click', function(evt){
  evt.preventDefault();
});
