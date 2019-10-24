import {
  GET_DECKS,
  ADD_DECK,
  EDIT_DECK,
  SET_CURRENT
} from '../actions/types';

const initialState = {
  decks: null,
  current: null,
  loading: false,
  errors: null
}
export default (state = initialState, action) => {
  switch(action.type){
    case GET_DECKS :
      return {
        ...state,
        decks: action.payload,
        loading: false,
        errors: null
      }
      case ADD_DECK :
        return {
          ...state,
          decks: action.payload,
          loading: false,
          errors: null
        }
      case SET_CURRENT :
        return {
          ...state,
          current: action.payload
        }
    default :
      return {
        ...state
      }
  }
}