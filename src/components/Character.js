import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, photoUrl }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={photoUrl}></img>
    </>
  );

}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
