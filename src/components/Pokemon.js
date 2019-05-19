import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render(){

    const {name, url, types, favorite} = this.props;

    return(
      <div className={favorite === true ? "card-container" : ""}>
        <img src={url} alt="" className="pok__img"/>
        <h2 className="pok__name">{name}</h2>
        <ul className="types__list">
          {types.map((type, indexType) => {
            return(
              <li className="type__item" key={indexType}>
                {type}
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}
Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array
}
export default Pokemon;