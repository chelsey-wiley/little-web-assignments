var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  componentDidMount(){
    this.theInput.focus();
  }

  constructor(){
  super();
  this.state ={
    apiResult:{
      items:[]
    }
  }
  console.log('getting the info');
}

  clicky(){
    console.log('the input', this.theInput, this.theInput.value);
    this.theData(this.theInput.value);
  }

  keyUp(evt) {
   console.log(evt.keyCode, evt.target);
   if (evt.keyCode === 13) {
     this.theData(evt.target.value);
   }
 }

  theData(){
    $.ajax({
      url:"https://api.github.com/search/users?q=" + this.theInput.value
    })
    .done((data)=> {
      console.log('got the data', data);
      this.setState({
        apiResult:data
      });
    });
  }

  render() {
    return <div className="data-component">
      <input placeholder ="search" onKeyUp={(evt) => {this.keyUp(evt); }} ref={(theDomElement) => {this.theInput = theDomElement;}}/>
      <button onClick={() => {this.clicky(); }}>enter</button>

    <ul className="results">
      {this.state.apiResult.items.map((info) => {return <li className="theList" key={info.id}>
        <div className="name">{info.login}</div>
        <div className="url">{info.url}</div>
      </li>; })}
    </ul>


    </div>
  }
}

ReactDOM.render(<AppComponent />, mountNode);
