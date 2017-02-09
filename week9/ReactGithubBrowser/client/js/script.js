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
    var page = 1;
    console.log('the input is', this.theInput, this.theInput.value, 'the page is', page);
    this.theData(this.theInput.value) + "&page" + page;

  }

  keyUp(evt) {
   console.log(evt.keyCode, evt.target);
   if (evt.keyCode === 13) {
     this.theData(evt.target.value);
   }
 }

 https://api.github.com/search/users?q=

  theData(){
    $.ajax({
      url:"https://api.github.com/search/users?q=" + this.theInput.value,
    .done((data)=> {
      console.log('got the data', data);
      this.setState({
        apiResult:data
      });
    });
  }

  render() {
    var comma ="'";
    return <div className="data-component">
      <input placeholder ="search" onKeyUp={(evt) => {this.keyUp(evt); }} ref={(theDomElement) => {this.theInput = theDomElement;}}/>
      <button onClick={() => {this.clicky(); }}>enter</button>
      <div className="paging">
      <button className="back" onClick={() => {this.clicky(); }}>Back</button>
      <div className="current-page"></div>
      <button className="next" onClick={() => {this.clicky(); }}>Next</button>
    </div>


    <ul className="results">
      {this.state.apiResult.items.map((info) => {return <li className="theList" key={info.id}>
        <div className="name">{info.login}</div>
        <div className="url"> <a target="_blank" href={info.html_url}>{info.login}{comma}s GitHub page</a></div>
      </li>; })}
    </ul>


    </div>
  }
}

ReactDOM.render(<AppComponent />, mountNode);
