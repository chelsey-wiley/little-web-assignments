
var clickHere = document.querySelectorAll('.click-here');

clickHere.addEventListener('click', function(){

    var text = document.querySelector('.text');

    text.classList.toggle('toggle-it')

});


var barbie = document.querySelector('.barbie');

barbie.addEventListener('click', function(){

    var ken = document.querySelector('.barbie');

    ken.classList.toggle('ken')

});
