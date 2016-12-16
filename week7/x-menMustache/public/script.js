var promise = $.ajax({
  url:'/api/x-men'
});

var apiData;
var mutantList = document.querySelector('.mutant-list');

promise.done (function(data){
  apiData = data;
  console.log('data', data);

for (var i = 0; i < data.xmen.length; i++){
  var mutant = data.xmen[i];

  var li = document.createElement('li')
  li.textContent = mutant.character;
  li.setAttribute('data-index', i);



  mutantList.appendChild(li);
}

console.log(mutantList);
});

var templateTag = document.querySelector('#character-template');

templateHtml = templateTag.innerHTML;
console.log(templateHtml);




mutantList.addEventListener('click', function(evt){
  console.log(evt.target);

  var currentlySelected = document.querySelector('.selected');
  if (currentlySelected != null){
    currentlySelected.classList.remove('selected');
  }

  evt.target.classList.add('selected');



  var mutant = apiData.xmen[attr];
  console.log('the mutant', mutant);

  var display = document.querySelector('.display');
  var output = Mustache.render(templateHtml, mutant);

  display.innerHTML = output;


}
);



//  display.innerHTML = '';
//
//  var h2 = document.createElement('h2');
//  h2.textContent = mutant.realName;
//  display.appendChild(h2);
//
//  var img =document.createElement('img');
//  img.src = mutant.imageUrl;
//  display.appendChild(img);
//
//  var h2description = document.createElement('h2');
//  h2description.textContent = 'description';
//  display.appendChild(h2description);
//
//  var description = document.createElement('p');
//  description.textContent = mutant.description;
//  display.appendChild(description);
//
//  var h2powers = document.createElement('h2');
//  h2powers.textContent = 'powers';
//  display.appendChild(h2powers);
//
// var ul = document.createElement('ul');
// display.appendChild(ul);
//
//  for (var i = 0; i < mutant.powers.length; i++){
//     var powers = mutant.powers[i];
//
//     var powersList = document.createElement('li');
//     powersList.textContent = mutant.powers[i];
//     ul.appendChild(powersList);
//   };