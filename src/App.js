import React, { Component } from 'react';
import Card from 'antd/lib/card';
import { Input } from 'antd';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Search = Input.Search;


// const BasicExample = () => (
  // <Router>
  //   <div>
  //     <ul>
  //       <li><Link to="/">Home</Link></li>
  //       <li><Link to="/about">About</Link></li>
  //       <li><Link to="/topics">Topics</Link></li>
  //     </ul>
  //
  //     <hr/>
  //
  //     <Route exact path="/" component={Home}/>
  //     <Route path="/about" component={About}/>
  //     <Route path="/topics" component={Topics}/>
  //   </div>
  // </Router>
// )


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: {},
    };
  }
  render() {
    const pokemonNames = Object.keys(pokemonMetadata);
    console.log(this.state.searchTerm)
    return (
      <Router>
        <div className = "app">
          <Search
            placeholder="input search text"
            style={{ width: 200 }}
            onChange={e => this.setState({searchTerm: e.target.value.toLowerCase()})}
          />
        <div className = "notContainer">
           <Route path="/:name" component={Child} />
           <Route exact path="/" render={()=>(
             <Body
               searchTerm = {this.state.searchTerm}
               pokemonNames = {pokemonNames}
             />
         )}/>
          </div>
        </div>
      </Router>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.name}</h3>
  </div>
)


function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function PokemonCard(props) {
  return (
    <Card
      title={toTitleCase(props.name)}
      style={{ width: 240, margin: 10 }}
      bodyStyle={{ padding: 10 }}
      extra={props.id}
    >
      <img
        alt={props.name}
        width="100%"
        src={props.imgSource}
      />
    <Link to={props.name}>Show Me More</Link>
    </Card>
  )
}

function Body(props){
  return(
    <div className="Container">
      {props.pokemonNames
          .filter((name) => {
            return name.includes(props.searchTerm);
          })
          .map((name) => {
            const pokemon = pokemonMetadata[name]
            return (
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                imgSource={pokemon.sprites.front_default}
              />
            )
          })
      }
    </div>
  )
}
export default App;
