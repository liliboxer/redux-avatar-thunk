import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING } from '../actions/avatarActions';

const initialState = {
  characters: [],
  loading: false

};

export default function avatarReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload, loading: false }; 
    default:
      return state;
  }
}
