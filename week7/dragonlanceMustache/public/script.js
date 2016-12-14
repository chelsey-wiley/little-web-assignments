(function() {


  var promise = $.ajax({
    url:'http://localhost:5003/api/dragonlance'
  });

  promise.done(function(data){
    console.log('data back', data);

    var theList = document.querySelector('.dragonlance-list');

    var html = '';

    for (var i=0; i<data.characters.length; i++){
    var kind = data.characters[i];

    var output = Mustache.render('<li>{{name}}<p class="raceP">{{race}}</p><p class="description">{{description}}</p></li>', kind);

    console.log(output);
    html += output;
    }

    theList.innerHTML = html;


});

}());
