(function() {
  'use strict';



  // var toggleMe = document.querySelector('.toggle-me');
  // toggleMe.addEventListener('click', function(){
  //     toggleMe.classList.toggle('on');
  // });


  class CustomView{

    constructor(selector){
      console.log('custom view consturctor', selector);
      this.selector = selector; // creates property on this object so I can use it
      this.element = document.querySelector(selector);
    }
    //adds event listener and toggles the class
    setupToggling(className){
      this.element.addEventListener('click', function(evt){
        evt.target.classList.toggle(className);
        console.log('setup');
      });
    }
    txt(str) {
      this.element.textContent = str;
    }
  }

  var firstToggler = new CustomView('.toggle-me');
  // console.log('first toggler', firstToggler)
  firstToggler.setupToggling('on');

  var secondToggler = new CustomView('.toggle-this-too');
  secondToggler.setupToggling('on');

  var thirdToggler = new CustomView('.put-text-here');
  thirdToggler.txt('hello');

}());
