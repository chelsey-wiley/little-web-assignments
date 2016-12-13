var express = require('express');  //pulls in node module same name and put into variable

var app = express(); //creates the app (app variable name) this is the thing you want to listen on.

app.use(express.static('public')) //middleware app.use is a function static is a function pass where you're storing your files to be seen "app uses expresses static file module and the folder is called public "


app.get('/web/path',function(req, res){
  //when someone does a get (comes to) this path (the webpath at the localhost:5012/web/path) here it fires this call back function passing the request and the response.

  res.send('hello'); //tell express to send data. can style it PRN
});

app.get('/web/path/anotherpage',function(req, res){

res.send('<h1>this is another page<h1>');

});

app.get('/api/class',function(req, res){

var theClass = { // regular JS obj. with properties
  name:'Front-End Dev',
  cohort: 'Oct 2016',
  students: ['miguel', 'chad', 'chelsey', 'kyle', 'david', 'taylor']
};

res.send(theClass); //sends the object the class and creates a json- returing API the thing you call json what comes back from the call. The path can be called with AJAX.

});
  app.listen(5012, function (){
  console.log ('listening');
});


//port: computers talk to each other (stay in your lane)
//to see files must kill the server with control C
//anything you want to see (static) can be stored in the public folder
//if you get a spinner you forget send (or tons of data)
//server.js package.json -- config everything
//node_modules -- in gitignore
//html css and js anything you need to see in public file
//code lines 20-30 is the boundary between backend and Front-End. 
