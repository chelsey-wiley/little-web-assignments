console.log('script file hooked up!');


var promise = $.ajax({
  url:'https://punkapi.com/api/v1/beers',
  headers: {
    "Authorization": "Basic " + btoa('3216d3f36d5b41138acae8d9085a6c6d:')
    //send information about your request like user-agent. Tells the server this is what I am. I'm using Chrome v...
    //headers are info about the request and about the response
    //content type with response: server sending back "this" kind of data.
    //content encoding: zipped -performance thing compresses data

  },
});

promise.done(function(data){
  console.log('the data', data);

  var beerInfo = document.querySelector('.beer-info');
  var templateScript = document.querySelector('.beer-template');
  var templateHtml = templateScript.innerHTML;

  var html=''

  for (i=0; i<data.length; i++){
    var beer=data[i];

    var output = Mustache.render(templateHtml, beer);
    html += output
  }
  beerInfo.innerHTML= html;
});
