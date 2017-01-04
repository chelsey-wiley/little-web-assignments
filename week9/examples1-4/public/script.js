'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var ListComponent = function (_React$Component) {
  _inherits(ListComponent, _React$Component);

  function ListComponent() {
    _classCallCheck(this, ListComponent);

    return _possibleConstructorReturn(this, (ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).apply(this, arguments));
  }

  _createClass(ListComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        ' ',
        this.props.name,
        ' - ',
        this.props.type,
        React.createElement(
          'ol',
          null,
          this.props.favs.map(function (favs) {
            return React.createElement(
              'li',
              { key: favs },
              favs
            );
          })
        )
      );
      console.log('props?', this.props);
    }
  }]);

  return ListComponent;
}(React.Component);

{/*use CDN from google for jquery attach script to HTML*/}

var GitHubThingy = function (_React$Component2) {
  _inherits(GitHubThingy, _React$Component2);

  function GitHubThingy() {
    _classCallCheck(this, GitHubThingy);

    var _this2 = _possibleConstructorReturn(this, (GitHubThingy.__proto__ || Object.getPrototypeOf(GitHubThingy)).call(this));

    {/*in constructor don't set state apiResult blank obj to be filled in later*/}
    _this2.state = {
      apiResult: {
        results: []
      }
    };
    console.log('firing Starwars');
    return _this2;
  }

  _createClass(GitHubThingy, [{
    key: 'clicky',
    value: function clicky() {
      var _this3 = this;

      $.ajax({
        url: 'http://swapi.co/api/people'
      }).done(function (data) {
        console.log('got it!', data);

        _this3.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log('star wars stuff rendered');
      return React.createElement(
        'div',
        { className: 'Github-thingy' },
        React.createElement(
          'h2',
          null,
          'GitHub Here'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this4.clicky();
            } },
          'Load Data'
        ),
        React.createElement(
          'ul',
          null,
          this.state.apiResult.results.map(function (peeps) {
            return React.createElement(
              'li',
              { key: peeps.url },
              peeps.name
            );
          })
        )
      );
    }
  }]);

  return GitHubThingy;
}(React.Component);

var AppComponent = function (_React$Component3) {
  _inherits(AppComponent, _React$Component3);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {

      var data = [{
        name: 'Moes',
        type: 'tacos',
        favs: ['taco', 'burrito', 'rice-bowl'],
        id: 1
      }, {
        name: 'ChopHouse Burger',
        type: 'burgers',
        favs: ['americana', 'goat-cheese'],
        id: 2
      }, {
        name: 'Metropolitian Cafe',
        type: 'cafe',
        favs: ['soup, ', 'salad '],
        id: 3
      }];

      return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(
          'ul',
          null,
          data.map(function (itemInData) {
            return React.createElement(ListComponent, { key: itemInData.id, name: itemInData.name, type: itemInData.type, favs: itemInData.favs });
          })
        ),
        React.createElement(GitHubThingy, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

;

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
