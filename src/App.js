import React from 'react';
import PokeList from './components/PokeList';
import {pokemon} from './components/Array';
import './App.css';



class App extends React.Component {
  render () {
    return (
      <div className="app">
      <h1 className="app__title">Mi lista de pokemon</h1>
      <PokeList 
        pokemon={pokemon}
      />
      </div>
    );
  }
  
}

export default App;
