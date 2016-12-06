var button = document.querySelector('.add-person-button');
var peopleList = document.querySelector ('.people-list');
var firstNameInput = document.querySelector ('.first-name-input');
var lastNameInput = document.querySelector ('.last-name-input');

button.addEventListener('click', addPerson);

  lastNameInput.addEventListener('keyup', function(evt){
    if (evt.keyCode === 13){
      addPerson();
    }
    });

  function addPerson(){
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    var li = document.createElement('li');
    li.textContent = firstName + ' ' + lastName;
    peopleList.appendChild(li);

    firstNameInput.value = ' ';
    lastNameInput.value = ' ';
  };
