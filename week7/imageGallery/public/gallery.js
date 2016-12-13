var promise = $.ajax({
  url:'/api/pics'
});

var apiData;
var thumbnailList= document.querySelector('.thumbnail-list');

promise.done(function(data){
  apiData = data;
  console.log('done', data);

for (var i = 0; i < data.pictures.length; i++){
  var pic = data.pictures[i];

  console.log('pic', pic);

  var img = document.createElement('img');
  img.src = pic.thumbnail;
  thumbnailList.appendChild(img);

}



});
