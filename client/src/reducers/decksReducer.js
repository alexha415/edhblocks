import {
  GET_DECKS,
  ADD_DECK,
  DELETE_DECK,
  SET_CURRENT,
  DECKS_LOADING
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
        case ADD_DECK :
          return {
            ...state,
            decks: action.payload,
            current: action.payload._id,
            loading: false,
            errors: null
          }
        case DELETE_DECK :
          return {
            ...state,
            current: [],
            loading: false,
            errors: null
          }
        case DECKS_LOADING:
          return {
            ...state,
            loading: true
          }
    default :
      return {
        ...state
      }
  }
}