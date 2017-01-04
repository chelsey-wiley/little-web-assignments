var mountNode = document.querySelector('#react-root');



class AppComponent extends React.Component {

  constructor(){
    super();
    console.log ('I clicked it');

    this.state= {
      currentClass: "off"
    };
  }

    toggle(){

      if(this.state.currentClass === "on"){
        this.setState({
          currentClass: "off"
        });
      }

      else {
        this.setState({
          currentClass: "on"
        });
      }
    }


  render() {
    return <div className={this.state.currentClass} onClick={() => {this.toggle();}}>Click Me! </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
