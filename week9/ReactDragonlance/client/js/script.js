var mountNode = document.querySelector('#react-root');


class AppComponent extends React.Component {
  constructor(){
    super();
    this.state ={
      apiResult:{
        characters:[]
      }
    }
    console.log('getting the info');
  }

  theData(){
    $.ajax({
      url:'http://localhost:5002/api/dragonlance'
    })
    .done((data) =>{
      console.log('got it!', data);

      this.setState({
        apiResult:data
      });
    });
  }

  render() {
    return <div className="data-component">
    <button onClick={() => this.theData()}>Load Data</button>
      <ul>
        {this.state.apiResult.characters.map((char, index) => {return <li key={index}><div className="name">{char.name}</div>
        <div className="description">{char.description}</div>
        <div className="race">{char.race}</div></li>; })}
      </ul>


    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
