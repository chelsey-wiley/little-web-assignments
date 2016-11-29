var messages = [
'I cant talk',
'I am busy',
'please do not call again',
'I wont return this message',
'I died'
];


for (var i = 0; i < 20; i++); {
var rand = Math.random();
rand = rand * messages.length;
rand = Math.floor(rand);

var custMes = messages[rand];
console.log(custMes)
return
}


//exclusive of 1 inclusive of 0
//must round down or will get a higer index than available messages
//math.floor --- rounds down
//math.ceil --- rounds down
