import React from 'react';

class PokeList extends React.Component {
  
  render (){
    const pokemon = this.props.pokemon;

    return(
      <ul className="pokemons__list">
        {pokemon.map((pok, index) => {
          return(
            <li className="pok__item" key={index}>
              <div className="card-container">
                <img src={pok.url} alt="" className="pok__img"/>
                <h2 className="pok__name">{pok.name}</h2>
                <ul className="types__list">
                  {pok.types.map((type, indexType) => {
                    return(
                      <li className="type__item" key={indexType}>
                        {type}
                      </li>
                    );
                  })
                  }
                </ul>
              </div>
            </li>
          );
        })
        }
      </ul>
    );
  }
}
export default PokeList;