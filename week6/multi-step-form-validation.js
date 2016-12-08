console.log ('hiya page 2')



//checkForValue(evt, firstNameInput);
//checkForValue(evt, lastNameInput);


function checkForValue(evt, theDomElement){
  if(theDomElement.value === ''){
    // evt.prevent.Default();
    theDomElement.classList.add('wrong');
    return false;
  }
  else {
    theDomElement.classList.remove('wrong');
    return true;
  }
}
