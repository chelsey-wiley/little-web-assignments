'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  // var toggleMe = document.querySelector('.toggle-me');
  // toggleMe.addEventListener('click', function(){
  //     toggleMe.classList.toggle('on');
  // });


  var CustomView = function () {
    function CustomView(selector) {
      _classCallCheck(this, CustomView);

      console.log('custom view consturctor', selector);
      this.selector = selector; // creates property on this object so I can use it
      this.element = document.querySelector(selector);
    }
    //adds event listener and toggles the class


    _createClass(CustomView, [{
      key: 'setupToggling',
      value: function setupToggling(className) {
        this.element.addEventListener('click', function (evt) {
          evt.target.classList.toggle(className);
          console.log('setup');
        });
      }
    }, {
      key: 'txt',
      value: function txt(str) {
        this.element.textContent = str;
      }
    }]);

    return CustomView;
  }();

  var firstToggler = new CustomView('.toggle-me');
  // console.log('first toggler', firstToggler)
  firstToggler.setupToggling('on');

  var secondToggler = new CustomView('.toggle-this-too');
  secondToggler.setupToggling('on');

  var thirdToggler = new CustomView('.put-text-here');
  thirdToggler.txt('hello');
})();
//# sourceMappingURL=toggler.js.map