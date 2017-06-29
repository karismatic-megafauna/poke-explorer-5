import React, { Component } from 'react';
import Card from 'antd/lib/card';
import { Input } from 'antd';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';

const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  render() {
    const pokemonNames = Object.keys(pokemonMetadata);
    console.log(this.state.searchTerm)
    return (
      <div className = "app">
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onChange={e => this.setState({searchTerm: e.target.value})}
        />
      <div className = "Container">
          {pokemonNames.map((name) => {
            const pokemon = pokemonMetadata[name]
            return (
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                imgSource={pokemon.sprites.front_default}
              />
            )
          })}
        </div>
      </div>
    );
  }
}


function PokemonCard(props) {
  return (
    <Card
      title={props.name}
      style={{ width: 240, margin: 10 }}
      bodyStyle={{ padding: 10 }}
      extra={props.id}
    >
      <img
        alt={props.name}
        width="100%"
        src={props.imgSource}
      />
    </Card>
  )
}
export default App;
