(function() {
  'use strict';

var mountNode = document.querySelector('#react-root');

class PersonComponent extends React.Component{

  constructor(){
    super();
    console.log ('firing PersonComponent instructor');

    this.state = {
      currentClass:'',
    };
  }

  toggle(){

    if(this.state.currentClass === 'blue'){
      this.setState({
        currentClass: ''
      });
    }
    else {
      this.setState({
        currentClass: 'blue'
      });
    }
  }

  render(){
    console.log('fires when the stuff renders');

    return (
      <li className={this.state.currentClass} onClick={() => this.toggle()}>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name:{this.props.lastName}</div>
      </li>
    )
  }
}



class AppComponent extends React.Component {

  divClick(){
    console.log('this is the function you clicked on running');
  }
  render() {

    var data = [{
        firstName: 'Ethel',
        lastName: 'Mardid',
        id: 1,
      },
      {
        firstName: 'Bob',
        lastName: 'Draymond',
        id: 2,
      },
      {
        firstName: 'Ken',
        lastName: 'Weiss',
        id: 3,
      }
    ];

    var myGreeting= 'Hello Peeps';
    var theComponents = data.map((person) => {
      console.log('what is this?', this);
      return <PersonComponent key={person.id} firstName={person.firstName}/>
    });

    return <div className="app-component">

        <h1>{myGreeting}</h1>

        <p onClick={() => {console.log('ya clicked it');}}>Click this thing</p>

        <div onClick={() => { this.divClick();}}> Or you could click here</div>

        <ul>
          <PersonComponent firstName="Jane" lastName="Smith"/>
          <PersonComponent firstName="Bob" lastName="Jones"/>
          {theComponents}
        </ul>
      </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);

}());
