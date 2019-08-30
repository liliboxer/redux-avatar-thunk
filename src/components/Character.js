import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, photoURL }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={photoURL}></img>
    </>
  );

}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired
};

export default Character;
