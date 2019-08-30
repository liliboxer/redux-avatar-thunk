import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const charactersList = characters.map(c => (
    <li key={c._id}>
      <Character name={c.name} photoUrl={c.photoUrl}/>
    </li>
  ));

  return (
    <ul>{charactersList}</ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
