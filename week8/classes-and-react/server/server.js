var express = require('express'); //pulls in express

var app = express(); //creates app
app.use(express.static('public')); //use staic file in the public folder as specified

app.listen(5004, function (){ //
  console.log('listening on port 5004');
});
