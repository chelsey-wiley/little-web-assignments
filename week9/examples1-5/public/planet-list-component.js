'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {}; //on the window.name = on the window.name or blank object window.sw will be coerced into false because it is undefined.

(function () {
  'use strict';

  //Everytime you add a new file must manually restart gulp
  //outside the iife means the PlanetListComponent is in the global scope inside the iife it is not. Must create namespace.

  var PlanetListComponent = function (_React$Component) {
    _inherits(PlanetListComponent, _React$Component);

    function PlanetListComponent() {
      _classCallCheck(this, PlanetListComponent);

      return _possibleConstructorReturn(this, (PlanetListComponent.__proto__ || Object.getPrototypeOf(PlanetListComponent)).call(this));
      // this.state={
      //   apiResult:{
      //     results:[]
      //   }
      // };
    }

    _createClass(PlanetListComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.theData();
      }
    }, {
      key: 'theData',
      value: function theData() {
        var _this2 = this;

        $.ajax({
          url: 'http://swapi.co/api/planets/'
        }).done(function (data) {
          console.log('the data', data);
          _this2.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var theList; //set a variable then call the variable conditional to the if statement

        if (this.state !== null) {
          theList = React.createElement(
            'ul',
            null,
            this.state.apiResult.results.map(function (planet, index) {
              return React.createElement(
                'li',
                { key: index },
                planet.name
              );
            })
          );
        }

        return React.createElement(
          'div',
          { className: 'planet-list' },
          React.createElement(
            'h1',
            null,
            'Planet List'
          ),
          theList
        );
      }
    }]);

    return PlanetListComponent;
  }(React.Component);

  SW.PlanetListComponent = PlanetListComponent; //Keep these the same the property will make more sense.
  //type SW in console in browswer to see the object with the PlanetListComponent init.

})();
//# sourceMappingURL=planet-list-component.js.map
