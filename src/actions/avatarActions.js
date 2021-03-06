import { getCharacters } from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_LOADING });
  getCharacters()
    .then(characters => {
      console.log(characters);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
    });
};
