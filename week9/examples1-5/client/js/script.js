(function() {
  'use strict';


  var mountNode = document.querySelector('#react-root');

//remove PlanetListComponent

  class AppComponent extends React.Component {

    render() {
      return <div>
        <window.SW.PlanetListComponent/>
        {/*references the namespace from the file component you want to pull. (.window is redundany and can be ommitted.)*/}
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);



}());
