var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  componentDidMount(){
    this.theInput.focus();
  }

  click(){
    console.log('the input', this.theInput, this.theInput.value);
    //this.theInput.focus - loads on componentDidMount not on button

    $.ajax({
      url:"https://api.github.com/search/users?q=" + this.theInput.value
    })
    .done((data) => {
      console.log('got that data!', data);
    });
  }

  keyUpHappened(evt){
      if(evt.keyCode === 13) {
        console.log ('ta da');
      });
  }

  render() {
    return <div>
      <input placeholder="type here"  ref={(theDomElement) => {this.theInput = theDomElement;}}/>
      <button onClick={()=> {this.click();}}>focus</button>

      <input placeholder ="type term here"
      onKeyUp={(evt) => {this.keyUpHappened(evt);}} />

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
