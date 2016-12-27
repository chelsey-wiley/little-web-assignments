console.log ('hello there');


var mountNode = document.querySelector('.the-selector');


class AnotherComponent extends React.Component{
  render(){
    return<div className="tada">Hello, {this.props.name}</div>
  }
}


class HelloMessage extends React.Component {
  render() {
    var name = 'Joe';

    return <div>
    <p>Hello {name}!</p>
      <AnotherComponent name={name} />
    </div>;
  }
}


ReactDOM.render(<HelloMessage />, mountNode);
