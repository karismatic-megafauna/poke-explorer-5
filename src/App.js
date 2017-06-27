import React, { Component } from 'react';
import Card from 'antd/lib/card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonCard
          name="Squirtle, Deal With It"
          id="7"
          imgSource="http://vignette4.wikia.nocookie.net/pokemontowerdefensethree/images/f/f3/Squirtle.jpg/revision/latest?cb=20160806214440"
        />
        <PokemonCard
          name="Squirtle, Deal With It"
          id="8"
          imgSource="http://vignette4.wikia.nocookie.net/pokemontowerdefensethree/images/f/f3/Squirtle.jpg/revision/latest?cb=20160806214440"
        />

      </div>
    );
  }
}


function PokemonCard(props) {
  return (
    <Card
      title={props.name}
      style={{ width: 240 }}
      bodyStyle={{ padding: 0 }}
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
