import React from 'react';
import PokeList from './components/PokeList';
import { pokemon } from './datasources/Array';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);

    const pokemonList = pokemon.map(poke => {
      return {...poke, favorite: false};
    })

    this.state = ({
      pokemonList: pokemonList
    })

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {

    const newItem = {...item, favorite: !item.favorite};
    // const newItem = item.favorite === false ? {...item, favorite: true} : {...item, favorite: false};

    this.setState((prevState) => {
      const newPokemonList = prevState.pokemonList.map(item => 
        (item.id===newItem.id ? newItem : item));

      console.log('***', newPokemonList);

      return({
        pokemonList: newPokemonList
      });
    })
  }

  render() {
    return (
      <div className="app">
      <h1 className="app__title">Mi lista de pokemon</h1>
      <PokeList 
        pokemon={this.state.pokemonList}
        actionToSelect={this.handleSelect}
      />
      </div>
    );
  }
  
}

export default App;
