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
