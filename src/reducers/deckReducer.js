import { 
  CLEAR_DECK,
  ADD_CART,
  ADD_COMMANDER,
  REMOVE_FROM_DECK
} from "../actions/types"

const initialState = {
  commander: null,
  deckList: [],
  categories: [
    'Land',
    'Enchantment',
    'Artifact',
    'Sorcery',
    'Instant',
    'Planeswalker',
    'Creature'
  ],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case ADD_CART :
        return {
          ...state,
          deckList: [...state.deckList, ...action.payload],
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
       case REMOVE_FROM_DECK :
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