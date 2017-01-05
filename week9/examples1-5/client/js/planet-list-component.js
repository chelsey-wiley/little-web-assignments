window.SW = window.SW || {}; //on the window.name = on the window.name or blank object window.sw will be coerced into false because it is undefined.

(function() {
  'use strict';

//Everytime you add a new file must manually restart gulp
//outside the iife means the PlanetListComponent is in the global scope inside the iife it is not. Must create namespace.

class ListItemComponent extends React.Component{
  constructor(){
    super();

    this.state={
      currentClass: "off"
    };

  }

    toggle(){
      if(this.state.currentClass === "on"){
        this.setState({
          currentClass: "off"
        });
      }
      else{
        this.setState({
          currentClass: "on"
        });
      }
    }
    render (){

      return <li className={this.state.currentClass} onClick={()=> {this.toggle();}}>
      <div className="name">{this.props.planet.name}</div>
      <div className="rotation">{this.props.planet.rotation_period}</div>
      <div className="gravity">{this.props.planet.gravity}</div>
      </li>
    }
  }





  class PlanetListComponent extends React.Component {
    constructor(){
      super();
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
        theList = <ul>
        {this.state.apiResult.results.map((planet) => {return <ListItemComponent key={planet.url} planet={planet} />})}
          </ul>
      }

      return <div className ="planet-list">
        <h1>Planet List</h1>

        {/*<button onClick={()=> this.theData()}> Load it!</button>
        Removed button because componentDidMount loads the data on page load*/}

        {theList}

         {/*//puts the variable theList (which is a ul and an li) into the page*/}

      </div>

    }
  }

  SW.PlanetListComponent = PlanetListComponent; //Keep these the same the property will make more sense.
  //type SW in console in browswer to see the object with the PlanetListComponent init.










}());
