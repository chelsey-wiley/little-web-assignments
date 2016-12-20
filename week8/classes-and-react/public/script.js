'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  //when things are named use a capital
  //class is a blueprint
  //classes have data, properties, and functions (ie:array is a class)
  //define Person and anytime a person is created they will have a sayName function
  //built in functions (push, pop, length, slice) all happen on classes
  //class - collective (2003 toyota camry) the thing
  //instance - individual item (vin number of each camry) the instance of the thing
  //this - a keyword- the current item (the vin number for the camry you're looking at) the current instance
  //new - a keyword to create another instance

  var Person = function () {
    function Person() {
      _classCallCheck(this, Person);
    }

    _createClass(Person, [{
      key: 'sayName',


      //function attached to the person can't access outside of the Person class
      value: function sayName() {
        console.log('this is referring to...', this);
        //this
      }
    }]);

    return Person;
  }();

  var bob = new Person();

  bob.firstName = 'Bob';
  bob.lastName = 'Jones';
  console.log('bob', bob);

  bob.sayName();

  var mary = new Person();

  mary.firstName = 'Mary';
  mary.lastName = 'Poppins';
  console.log('mary', mary);

  mary.sayName();
})();
//# sourceMappingURL=script.js.map