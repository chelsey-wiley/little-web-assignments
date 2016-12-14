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
    // console.log('characters', kind);
    //
    // var li = document.createElement('li');
    // li.textContent = kind.name;
    //
    //
    // theList.appendChild(li);
    //
    // var raceP = document.createElement('p');
    // raceP.textContent = kind.race;
    //
    // raceP.classList.add ('raceP');
    // li.appendChild(raceP);
    //
    //
    // var descriptionP = document.createElement('p');
    // descriptionP.textContent = kind.description;
    //
    // li.appendChild(descriptionP);

});

}());
