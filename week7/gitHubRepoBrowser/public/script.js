console.log('script file hooked up!');

var resList=document.querySelector('#res-list');


function requestData(){
  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=barbie'
  });

  promise.done(function(data){
    console.log(data);

    // for (var i = 0; i < data.length; i++) {
    //   var search = [i];
    //   console.log(apiResult);
    // }
  })
};
requestData();

var wordInput = document.querySelector('.search-text');
wordInput.addEventListener('keyup',function(evt){
  // console.log(evt.keyCode);
  if(evt.keyCode===13){
    console.log('you hit enter');

  $.ajax({
  url:'https://api.github.com/search/repositories?q=',
  method:'POST',
  data: { word: wordInput.value }
  })

  .done(function(){
    console.log('the POST is done')
    getTheData();
  });
}
});
