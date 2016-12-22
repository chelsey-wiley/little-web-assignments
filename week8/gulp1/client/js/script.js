console.log ('hello there');


var mountNode = document.querySelector('.the-selector');


class AnotherComponent extends React.Component{
  render(){
    return<div>Hello, <this.HelloMessage.name></div>
  }
}


class HelloMessage extends React.Component {
  render() {
    var name = 'Joe';
    return <div>
    <p>Hello {name}!</p>
      <AnotherComponent />
    </div>;
  }
}


ReactDOM.render(<HelloMessage />, mountNode);
