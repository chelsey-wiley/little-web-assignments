var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(6767, function(){
  console.log('listening on port 6767');
});
