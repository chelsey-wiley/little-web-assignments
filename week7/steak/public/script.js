   (function() {
  var theList= document.querySelector('.steak-info');

  var promise = $.ajax({
    url: 'http://localhost:5008/api/steak'
  });

  promise.done (function(data){
    console.log('data back', data);

    for (var i = 0; i < data.levels.length; i++){
      var kind = data.levels[i];
      console.log('name', kind);

      var li = document.createElement('li');
      li.textContent = kind.name;

      theList.appendChild(li);

      var descriptionP = document.createElement('p');
      descriptionP.textContent = kind.description;

      li.appendChild(descriptionP);

      var img = document.createElement('img');
      img.src=kind.imageUrl;
      li.appendChild(img);


    }

  });
}());
