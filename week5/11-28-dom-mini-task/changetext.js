var changedIt = document.querySelector('.change-me');
changedIt.textContent = 'Ya been changed';



//change paragraph text on click
var changePara = document.querySelector('.change-para');

changePara.addEventListener('click', clicky)


function clicky(evt){
  evt.target.textContent = "ya clicked me";

var stuffHere = document.querySelector('.change-para');
stuffHere.innerHTML = '<p>This is the paragraph I changed with my mad JS skills.</p>'
}

//toggle css class on click

var changeCss = document.querySelector('.first-color');

function clickedIt(){
  console.log ('is it called?');
  changeCss.classList.toggle('new-color');
}

changeCss.addEventListener('click', clickedIt);


//highlight clicked names
var clickName = document.querySelector('.on');

function clicking(){
  console.log ('working?');
  clickName.classList.toggle('off');
}

clickName.addEventListener('click', clicking);
