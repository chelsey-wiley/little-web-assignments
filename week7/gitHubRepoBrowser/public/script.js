console.log('script file hooked up!');

var resList=document.querySelector('#res-list');
var wordInput = document.querySelector('.search-text');

function requestData(){
  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + wordInput.value
  });

  promise.done(function(data){
    console.log(data);
      var searchInfo = document.querySelector('.search-info');
      var templateScript = document.querySelector('.results-template');
      var templateHtml=templateScript.innerHTML;

      var html =''

      for (var i = 0; i < data.items.length; i++) {
        var info = data.items[i];

        var output = Mustache.render(templateHtml, info);
        console.log(output);
        html += output
      }

      searchInfo.innerHTML= html;

  })
};

wordInput.addEventListener('keyup',function(evt){
  // console.log(evt.keyCode);
  if(evt.keyCode===13){
    console.log('you hit enter');

    requestData()

  // $.ajax({
  // url:'https://api.github.com/search/repositories?q=',
  // method:'POST',
  // data: { word: wordInput.value }
  // })
  //
  // .done(function(){
  //   console.log('the POST is done')
  //   getTheData();
  // });
}
});
