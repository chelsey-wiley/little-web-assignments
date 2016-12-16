console.log('script file hooked up!');

var gifList=document.querySelector('#gif-list');
var next = document.querySelector('.next');
var back = document.querySelector('.back');

next.addEventListener('click', function(){
page +=1;

localStorage.setItem('page-number', page);
//set item takes two values the name of the key and what you're storing after the increment before you load data for the next page.

theData();

});
console.log(page);

back.addEventListener('click', function(){
  if (page === 0){
    return;
  }
page -=1;
localStorage.setItem('page-number', page);

theData();
previousButtonThingy();
});



function previousButtonThingy(){
  if (page === 0){
    backButton.style.display = "none";
  }
}
var page = 0;

var storedValue = localStorage.getItem('page-number');
console.log(page,'page', 'stored value', storedValue);

if (storedValue !==null){
  page = Number(storedValue);
}

previousButtonThingy();

function theData(){
  // console.log('it works', page)

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=megatron&api_key=dc6zaTOxFJmzC&offset=0' + page * 25
  })

  .done(function(apiResult){
    // console.log('pah');
  gifList.innerHTML = '';

    for (var i = 0; i < apiResult.data.length; i++) {
      var obj = apiResult.data[i];
      // console.log(obj);

      var li = document.createElement('li');

      var img = document.createElement('img');
      img.src = obj.images.downsized.url;
      li.appendChild(img);

      gifList.appendChild(li);
    }
  });
}

theData();
