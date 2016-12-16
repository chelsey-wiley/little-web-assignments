console.log('script file hooked up!');

var gifList=document.querySelector('.gif-list');

$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search?q=megatron&api_key=dc6zaTOxFJmzC&offset=0'
})

.done(function(apiResult){
  console.log(data);

  for (var i = 0; i < apiResult.data.length; i++) {
    var obj = apiResult.data[i];
    console.log(obj);
  }
})
