(function() {
  'use strict';

  console.log("hello react")


  var testOne = document.querySelector('.testOne');
  var BlogPostHeader = window.Blog.BlogPostHeader;

  class BlogPostBody extends React.Component{
      render(){
      return <div className="post-body">
          <img src="http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg" />
          <p>First Paragraph</p>
          <p>Second Paragraph</p>
      </div>
    }
  }

  class BlogPostRelated extends React.Component{
    render (){
    return <div className="related">

      <h2>RELATED</h2>

      <ul>
        <li>
          <h3>Curse of the Zeldman Curse</h3>
          <div className="date"> 2 March 2013</div>
          <div className="category">In "Apple"</div>
        </li>

        <li>
          <h3>Curse of the Zeldman Curse</h3>
          <div className="date"> 2 March 2013</div>
          <div className="category">In "Apple"</div>
        </li>

        <li>
          <h3>Curse of the Zeldman Curse</h3>
          <div className="date"> 2 March 2013</div>
          <div className="category">In "Apple"</div>
        </li>
      </ul>

     </div>
   }
  }








  class BlogPost extends React.Component {
    render(){
      return <div className ="blog-post">
      <BlogPostHeader />
      <BlogPostBody />
      <BlogPostRelated />


    </div> //className = 'blog-post'


    }
  }

  ReactDOM.render(<BlogPost />, testOne);






}());
