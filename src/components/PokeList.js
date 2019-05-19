import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
  
  render (){
    const {pokemon, actionToSelect} = this.props;

    return(
      <ul className="pokemons__list">
        {pokemon.map(pok => {
          return(
            <li 
              className="pok__item" 
              key={pok.id}
              onClick = {() => actionToSelect(pok)}>
              <Pokemon
                url = {pok.url}
                name = {pok.name}
                types = {pok.types}
              />
            </li>
          );
        })
        }
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.array,
}
export default PokeList;