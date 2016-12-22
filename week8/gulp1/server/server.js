var express = require('express');
var app = express();

app.use(express.static('public'));
  app.listen(5445, function(){
    console.log('listening on 5445');
  });
