var promise = $.ajax({
  url:'/api/pics'
});

var apiData;
var thumbnailList= document.querySelector('.thumbnail-list');
var display = document.querySelector('.display');

promise.done(function(data){
  apiData = data;
  console.log('done', data);

  for (var i = 0; i < data.pictures.length; i++){
    var pic = data.pictures[i];
    console.log('pic', pic);
    var img = document.createElement('img');
    img.src = pic.thumbnail;
    thumbnailList.appendChild(img);
    img.setAttribute('data-index', i);
  }
});

var templateTag =document.querySelector('#picture-template');
var templateHtml= templateTag.innerHTML;
console.log(templateHtml);


thumbnailList.addEventListener('click', function(evt){
  var attr = evt.target.getAttribute('data-index');
  console.log('target', evt.target)

var currentlySelected = document.querySelector('.selected');

if(currentlySelected != null){
  currentlySelected.classList.remove('selected');
}
evt.target.classList.add('selected');


var theImage = apiData.pictures[attr];
console.log('the image', theImage)

var output = Mustache.render(templateHtml, theImage);


display.innerHTML = output;
console.log(display.innerHTML)
});
