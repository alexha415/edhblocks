import { 
  ADD_CARD,
  CLEAR_DECK,
  DELETE_CARD,
  ADD_COMMANDER
} from "../actions/types"

const initialState = {
  commander: null,
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
      case DELETE_CARD :
        return {
          ...state,
          deckList: state.deckList.filter(card => {
            return card.name !== action.payload.name
          })
        }
      case ADD_COMMANDER:
        return{
          ...state,
          commander: action.payload
        }
      default : 
        return{
            ...state
        }
  }
}