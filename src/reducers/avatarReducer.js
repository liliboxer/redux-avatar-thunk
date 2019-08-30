import { FETCH_CHARACTERS } from '../actions/avatarActions';

const initialState = {
  characters: []

};

export default function avatarReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload }; 
    default:
      return state;
  }
}
