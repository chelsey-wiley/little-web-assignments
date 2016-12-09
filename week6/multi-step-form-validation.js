console.log ('hiya page 2')





function checkForValue(evt, theDomElement){
  if(theDomElement.value === ''){
    theDomElement.classList.add('wrong');
    return false;
  }
  else {
    theDomElement.classList.remove('wrong');
    return true;
  }
}
