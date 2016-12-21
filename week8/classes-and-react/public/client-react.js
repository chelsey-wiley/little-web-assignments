'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';

  console.log("hello react");

  var testOne = document.querySelector('.testOne');
  var BlogPostHeader = window.Blog.BlogPostHeader;

  var BlogPostBody = function (_React$Component) {
    _inherits(BlogPostBody, _React$Component);

    function BlogPostBody() {
      _classCallCheck(this, BlogPostBody);

      return _possibleConstructorReturn(this, (BlogPostBody.__proto__ || Object.getPrototypeOf(BlogPostBody)).apply(this, arguments));
    }

    _createClass(BlogPostBody, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'post-body' },
          React.createElement('img', { src: 'http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg' }),
          React.createElement(
            'p',
            null,
            'First Paragraph'
          ),
          React.createElement(
            'p',
            null,
            'Second Paragraph'
          )
        );
      }
    }]);

    return BlogPostBody;
  }(React.Component);

  var BlogPostRelated = function (_React$Component2) {
    _inherits(BlogPostRelated, _React$Component2);

    function BlogPostRelated() {
      _classCallCheck(this, BlogPostRelated);

      return _possibleConstructorReturn(this, (BlogPostRelated.__proto__ || Object.getPrototypeOf(BlogPostRelated)).apply(this, arguments));
    }

    _createClass(BlogPostRelated, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'related' },
          React.createElement(
            'h2',
            null,
            'RELATED'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              React.createElement(
                'h3',
                null,
                'Curse of the Zeldman Curse'
              ),
              React.createElement(
                'div',
                { className: 'date' },
                ' 2 March 2013'
              ),
              React.createElement(
                'div',
                { className: 'category' },
                'In "Apple"'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'h3',
                null,
                'Curse of the Zeldman Curse'
              ),
              React.createElement(
                'div',
                { className: 'date' },
                ' 2 March 2013'
              ),
              React.createElement(
                'div',
                { className: 'category' },
                'In "Apple"'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'h3',
                null,
                'Curse of the Zeldman Curse'
              ),
              React.createElement(
                'div',
                { className: 'date' },
                ' 2 March 2013'
              ),
              React.createElement(
                'div',
                { className: 'category' },
                'In "Apple"'
              )
            )
          )
        );
      }
    }]);

    return BlogPostRelated;
  }(React.Component);

  var BlogPost = function (_React$Component3) {
    _inherits(BlogPost, _React$Component3);

    function BlogPost() {
      _classCallCheck(this, BlogPost);

      return _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).apply(this, arguments));
    }

    _createClass(BlogPost, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'blog-post' },
          React.createElement(BlogPostHeader, null),
          React.createElement(BlogPostBody, null),
          React.createElement(BlogPostRelated, null)
        ); //className = 'blog-post'

      }
    }]);

    return BlogPost;
  }(React.Component);

  ReactDOM.render(React.createElement(BlogPost, null), testOne);
})();
//# sourceMappingURL=client-react.js.map