import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '.././stylesheets/App.scss';

const CharacterDetail = (props) => {
  console.log(props);
  const { name, image, status, origin, species, episodes } = props.character;
  console.log(props.character);

  return (
    <div>
      <Link to="/">
        <span className="detail__span">
          <p className="span_retour">Come Back!</p>
        </span>
      </Link>
      <div className="detail">
        <h4 className="detail__name">{name}</h4>
        <span className="detail__img--span">
          <img className="detail__img--imagen" src={image} alt={name} />
        </span>
        <span className="detail__icons"></span>
        <p className="detail__text--species">
          <span className="detail__span">Species:</span> <span className="detail__result">{species}</span>
        </p>
        <p className="detail__text--status">
          <span className="detail__span">Status:</span> <span className="detail__result">{status}</span>
        </p>
        <p className="detail__text--origin">
          <span className="detail__span">Origin:</span> <span className="detail__result">{origin}</span>
        </p>
        <p className="detail__text--episodes">
          <span className="detail__span">Episodes:</span>
          <span className="detail__result">{episodes}</span>
        </p>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  species: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
};

export default CharacterDetail;
