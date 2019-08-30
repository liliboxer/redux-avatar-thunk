import { getCharacters } from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';

// thunk 
// export const fetchCharacters = () => dispatch => {
//   getCharacters()
//     .then(characters => {
//       console.log(characters);
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: characters
//       });
//     });
// };


export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  payload: getCharacters(),
  pendingType: FETCH_CHARACTERS_LOADING
});
