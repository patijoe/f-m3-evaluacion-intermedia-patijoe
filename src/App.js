import React from 'react';
import PokeList from './components/PokeList';
import { pokemon } from './components/Array';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    const pokeList = pokemon.map(poke => ({ ...poke, favorite: false }));

    this.state = {
      pokeList: pokeList
    }

    this.handleChoose = this.handleChoose.bind(this);
    this.replacePokemon = this.replacePokemon.bind(this);
  }

  replacePokemon(arr, itemSelected) {
    const newArr = arr.map(item => { 
      itemSelected.id === item.id ? item.favorite = true : item.favorite = false

      return item;
    })
    return newArr;
  }


  handleChoose(pokSelected) {
    const newPoke = { ...pokSelected, favorite: true };
    replacePokemon(pokeList, pokSelected)

    this.setState((prevState) => {
      return ({
        pokeList: newPokeList
      });
    });
  }

  render() {

    return (
      <div className="app">
          <h1 className="app__title">Mi lista de pokemon</h1>
          <PokeList
            pokemon={this.state.pokeList}
            actionToSelect={this.handleChoose}
          />
      </div>
    );
  }

}

export default App;
