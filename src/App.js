import React, { Component } from 'react';
import Card from 'antd/lib/card';
import './App.css';
import pokemonMetadata from 'pokemon-metadata';

const squirtle = pokemonMetadata.squirtle;

class App extends Component {
  render() {
    const pokemonNames = Object.keys(pokemonMetadata);
    return (
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
    );
  }
}


function PokemonCard(props) {
  return (
    <Card
      title={props.name}
      style={{ width: 240, margin: 10 }}
      bodyStyle={{ padding: 10, margin: 30 }}
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
