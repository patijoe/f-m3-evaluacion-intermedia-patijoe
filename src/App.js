import React from 'react';
import PokeList from './components/PokeList';
import { pokemon } from './datasources/Array';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      pokemon: pokemon
    })

  }


  render () {
    return (
      <div className="app">
      <h1 className="app__title">Mi lista de pokemon</h1>
      <PokeList 
        pokemon={this.state.pokemon}
      />
      </div>
    );
  }
  
}

export default App;
