//20 sided dice

var die = 20;

for (var i = 0; i < 20; i++); {
  var rand = Math.random();
  rand = rand * die;
  rand = Math.ceil(rand);

  console.log(rand)
}
