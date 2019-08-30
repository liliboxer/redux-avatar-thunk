import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const charactersList = characters.map(c => (
    <li key={c.id}>
      <Character name={c.name} photoURL={c.photoURL}/>
    </li>
  ));

  return (
    <ul>{charactersList}</ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
