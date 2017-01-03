console.log('script file hooked up!');

var resList=document.querySelector('#res-list');
var wordInput = document.querySelector('.search-text');
var nextButton = document.querySelector('.next');
var backButton = document.querySelector('.back');
var currentPage = document.querySelector('.current-page');
var page = 1;
var pageResults = 10;
// var totalResults = data.total_count;
//if `totalResults` is hoisted to the top "data is not defined" if totalResults is defined within the function then data never gets passed through. can't get total results until an api is called.

// nextButton.addEventListener('click', function(){
//   if (page < data.total_count / 20){
//     page +=1;
//     localStorage.setItem('the-page-is', page);
//     requestData();
//     currentPage.innerHTML = page;
//     console.log ('next clicked')
//   }
// });
//
//
// backButton.addEventListener('click', function(){
//   page -=1;
//   localStorage.setItem('the-page-is', page);
//   requestData();
//   currentPage.innerHTML = page;
//   console.log('back clicked')
// });


function requestData(){
  var wordHere = wordInput.value + "&page=" + page;
  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + wordHere
  });

  promise.done(function(data){
    // console.log(data);
      var searchInfo = document.querySelector('.search-info');
      var templateScript = document.querySelector('.results-template');
      var templateHtml=templateScript.innerHTML;


      var html =''

      for (var i = 0; i < data.items.length; i++) {
        var info = data.items[i];

        var output = Mustache.render(templateHtml, info);
        // console.log(output);
        html += output
      }

      searchInfo.innerHTML= html;
      totalCount = data.total_count;

  })
};

nextButton.addEventListener('click', function(){
  if (page < totalCount / 30){
    page +=1;
    localStorage.setItem('the-page-is', page);
    requestData();
    currentPage.innerHTML = page;
    console.log ('next clicked')
  }
});


backButton.addEventListener('click', function(){
  page -=1;
  localStorage.setItem('the-page-is', page);
  requestData();
  currentPage.innerHTML = page;
  console.log('back clicked')
});

wordInput.addEventListener('keyup',function(evt){
  // console.log(evt.keyCode);
  if(evt.keyCode===13){
    console.log('you hit enter');

    requestData()

}
});
