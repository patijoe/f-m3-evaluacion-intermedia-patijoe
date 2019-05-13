import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  
  render (){
    const pokemon = this.props.pokemon;

    return(
      <ul className="pokemons__list">
        {pokemon.map((pok, index) => {
          return(
            <li className="pok__item" key={index}>
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