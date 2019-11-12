import {
  GET_SYMBOLS, SYMBOL_FETCH_FAIL
} from '../actions/types';

const initialState = {
  uris: {
    white_uri: '',
    blue_uri: '',
    black_uri: '',
    red_uri: '',
    green_uri: '',
    colorless_uri: ''
  },
  loading: false,
  error: null
}

export default (state = initialState, action) => {
    switch(action.type){
      case GET_SYMBOLS:
        return {
          ...state,
          uris: {
            ...action.payload
          },
          loading: false,
          error: null
        }
      case SYMBOL_FETCH_FAIL: 
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: {
        return {
          ...state
        }
      }
    }
}