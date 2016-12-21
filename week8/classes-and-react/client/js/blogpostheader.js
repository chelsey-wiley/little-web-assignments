(function() {
  'use strict';


  class BlogPostHeader extends React.Component{

    render(){



      console.log('props', this.props.title);

      return <header>
            <p className="post-date"></p>
            <h1>{this.props.title}</h1>
          </header>

    }
  }

  window.Blog.BlogPostHeader = BlogPostHeader;
}());
