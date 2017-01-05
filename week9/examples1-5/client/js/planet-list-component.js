window.SW = window.SW || {}; //on the window.name = on the window.name or blank object window.sw will be coerced into false because it is undefined.

(function() {
  'use strict';

//Everytime you add a new file must manually restart gulp
//outside the iife means the PlanetListComponent is in the global scope inside the iife it is not. Must create namespace.

  class PlanetListComponent extends React.Component{
    constructor(){
      super();
        // this.state={
        //   apiResult:{
        //     results:[]
        //   }
        // };
      }

      componentDidMount(){
        this.theData();
      }

      theData(){
        $.ajax({
          url:'http://swapi.co/api/planets/'
        })
        .done((data) => {
          console.log('the data', data);
          this.setState({
            apiResult:data
          });
        });
      }
    render(){

      var theList; //set a variable then call the variable conditional to the if statement

      if (this.state !== null) {
        theList =  <ul>
            {this.state.apiResult.results.map((planet, index)=> {return<li key={index}>{planet.name}</li>})}
          </ul>
      }

      return(<div className ="planet-list">
        <h1>Planet List</h1>

        {/*<button onClick={()=> this.theData()}> Load it!</button>
        Removed button because componentDidMount loads the data on page load*/}

        {theList}

      </div>
      )
    }
  }

  SW.PlanetListComponent = PlanetListComponent; //Keep these the same the property will make more sense.
  //type SW in console in browswer to see the object with the PlanetListComponent init.










}());
