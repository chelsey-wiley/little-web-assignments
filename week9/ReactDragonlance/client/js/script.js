var mountNode = document.querySelector('#react-root');


class AppComponent extends React.Component {
  constructor(){
    super();
    this.state ={
      apiResult:{
        results:[]
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

    <h2>Data goes Here</h2>
    <button onClick={() => this.theData()}>Load Data</button>
    <dataComponent/>

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
