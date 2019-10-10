import { 
  ADD_CARD,
  CLEAR_DECK
} from "../actions/types"

const initialState = {
  deckList: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case ADD_CARD :
        return {
            ...state,
            deckList: [...state.deckList, action.payload],
            loading: false,
            error: null
        }
      case CLEAR_DECK :
        return {
          ...state,
          deckList: [],
          loading: false,
          error: null
        }
      default : 
        return{
            ...state
        }
  }
}