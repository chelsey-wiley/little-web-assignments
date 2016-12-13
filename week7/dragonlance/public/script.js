(function() {

  var theList = document.querySelector('.dragonlance-list');

  var promise = $.ajax({
    url:'http://localhost:5003/api/dragonlance'
  });

  promise.done(function(data){
    console.log('data back', data);

    for (var i=0; i<data.characters.length; i++){
    var kind = data.characters[i];
    console.log('characters', kind);

    var li = document.createElement('li');
    li.textContent = kind.name;


    theList.appendChild(li);

    var raceP = document.createElement('p');
    raceP.textContent = kind.race;

    raceP.classList.add ('raceP');
    li.appendChild(raceP);


    var descriptionP = document.createElement('p');
    descriptionP.textContent = kind.description;

    li.appendChild(descriptionP);
  }
});

}());
