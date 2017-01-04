'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';

  var mountNode = document.querySelector('#react-root');

  var PersonComponent = function (_React$Component) {
    _inherits(PersonComponent, _React$Component);

    function PersonComponent() {
      _classCallCheck(this, PersonComponent);

      var _this = _possibleConstructorReturn(this, (PersonComponent.__proto__ || Object.getPrototypeOf(PersonComponent)).call(this));

      console.log('firing PersonComponent instructor');

      _this.state = {
        currentClass: ''
      };
      return _this;
    }

    _createClass(PersonComponent, [{
      key: 'toggle',
      value: function toggle() {

        if (this.state.currentClass === 'blue') {
          this.setState({
            currentClass: ''
          });
        } else {
          this.setState({
            currentClass: 'blue'
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        console.log('fires when the stuff renders');

        return React.createElement(
          'li',
          { className: this.state.currentClass, onClick: function onClick() {
              return _this2.toggle();
            } },
          React.createElement(
            'div',
            null,
            'First Name: ',
            this.props.firstName
          ),
          React.createElement(
            'div',
            null,
            'Last Name:',
            this.props.lastName
          )
        );
      }
    }]);

    return PersonComponent;
  }(React.Component);

  var AppComponent = function (_React$Component2) {
    _inherits(AppComponent, _React$Component2);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: 'divClick',
      value: function divClick() {
        console.log('this is the function you clicked on running');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var data = [{
          firstName: 'Ethel',
          lastName: 'Mardid',
          id: 1
        }, {
          firstName: 'Bob',
          lastName: 'Draymond',
          id: 2
        }, {
          firstName: 'Ken',
          lastName: 'Weiss',
          id: 3
        }];

        var myGreeting = 'Hello Peeps';
        var theComponents = data.map(function (person) {
          console.log('what is this?', _this4);
          return React.createElement(PersonComponent, { key: person.id, firstName: person.firstName });
        });

        return React.createElement(
          'div',
          { className: 'app-component' },
          React.createElement(
            'h1',
            null,
            myGreeting
          ),
          React.createElement(
            'p',
            { onClick: function onClick() {
                console.log('ya clicked it');
              } },
            'Click this thing'
          ),
          React.createElement(
            'div',
            { onClick: function onClick() {
                _this4.divClick();
              } },
            ' Or you could click here'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(PersonComponent, { firstName: 'Jane', lastName: 'Smith' }),
            React.createElement(PersonComponent, { firstName: 'Bob', lastName: 'Jones' }),
            theComponents
          )
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
