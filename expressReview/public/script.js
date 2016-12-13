console.log('script file hooked up!');


var promise = $.ajax({ //pass in a configuration object.
  url:'/api/class'//call the api you create check the dev tools look under network tab and see the html, style, jquery,script,and json. ajax is async does not return right away because it is not immediate.
});

promise.done(function(data){ // done function is a specific to jQuery (common on other libraries) function: promise that you will fire a function once you're done. Data is passed into the function parameters.
  console.log('done!', data); //this console.log fires after the promise resolves. Promises are a pattern for handling async programming. The promise is configured to do things when it's done. Not specific to jQuery. Promises will work with other libraries

  var classNameH1= document.querySelector('.class-name')//get the dom elements
  var cohortNameH2 = document.querySelector('.cohort-name');

  classNameH1.textContent = data.name; //from the data we passed in get the property called name with a string of 'Front-End Dev'.
  cohortNameH2.textContent = data.cohort;

  var studentList = document.querySelector('.student-list'); // grabs the dom elements

  for (var i = 0; i < data.students.length; i++ ){//create a list item one for each student. Remember the mustache
    var student = data.students[i]; //deals with each student indvidually at that index position
    var li = document.createElement('li');
  li.textContent = student;
  studentList.appendChild(li); //add the li to the student list.
  }
});

console.log('sent ajax call'); //this console log fires before the 'done console.log'



//jQuery.com download googlecdn then go to 3.x snippet.
//If someone else uses the same CDN version it will cache the jQuery in the browser. The browswer already had the file. Upping the performance to be faster. The google CDN is popular and helps the speed.
//test jQuery by typing a $ in the console
