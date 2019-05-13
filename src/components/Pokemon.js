import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render(){
    const url = this.props.url;
    const name = this.props.name;
    const types = this.props.types;

    return(
      <div className="card-container">
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
  types: PropTypes.string
}
export default Pokemon;