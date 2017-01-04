var mountNode = document.querySelector('#react-root');

class ListComponent extends React.Component{

  render(){
    return <li> {this.props.name} - {this.props.type}
    {/*{this.props.place.name} {this.props.place.location}*/}
      <ol>
        {this.props.favs.map((favs) => { return <li key={favs}>{favs}</li>; })}
        {/*{this is a comment}*/}
      </ol>
      </li>
    console.log('props?', this.props);
  }
}


    {/*use CDN from google for jquery attach script to HTML*/}
class GitHubThingy extends React.Component {

  constructor() {
    super();
    {/*in constructor don't set state apiResult blank obj to be filled in later*/}
    this.state = {
      apiResult: {
        results: []
      }
    }
    console.log('firing Starwars');
  }


  clicky(){
    $.ajax({
      url:'http://swapi.co/api/people'
    })
    .done((data) =>{
      console.log('got it!', data);

      this.setState({
        apiResult:data
      });
    });

  }

  render (){
    console.log('star wars stuff rendered');
    return <div className="Github-thingy">
        <h2>GitHub Here</h2>
      <button onClick={()=> this.clicky()}>Load Data</button>
      <ul>
        {this.state.apiResult.results.map((peeps) => {return <li key={peeps.url}>{peeps.name}</li>; })}
      </ul>


    </div>
  }
}



class AppComponent extends React.Component {

  render() {

    var data = [{
        name:'Moes',
        type: 'tacos',
        favs: ['taco', 'burrito', 'rice-bowl'],
        id: 1,
      },
      {
        name: 'ChopHouse Burger',
        type: 'burgers',
        favs:['americana', 'goat-cheese'],
        id: 2
      },
      {
        name: 'Metropolitian Cafe',
        type: 'cafe',
        favs: ['soup, ', 'salad '],
        id: 3
      },
    ];

    return <div className="list">
      <ul>
          {/*data.map((place) => {return <ListComponent key={itemInData.id} place={place}/>; })}*/}
        {data.map((itemInData) => {return <ListComponent key={itemInData.id} name={itemInData.name} type={itemInData.type} favs={itemInData.favs} />; })}
      </ul>

      <GitHubThingy/>

    </div>;
  }
};

ReactDOM.render(<AppComponent />, mountNode);
