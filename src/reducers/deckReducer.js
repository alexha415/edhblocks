import { 
  CLEAR_DECK,
  ADD_CART,
  ADD_COMMANDER,
  REMOVE_FROM_DECK,
  GET_DECK,
  DECK_FAIL
} from "../actions/types"

const initialState = {
  commander: null,
  _id: null,
  deckList: [],
  colorId: '',
  categories: [
    'Land',
    'Enchantment',
    'Artifact',
    'Sorcery',
    'Instant',
    'Planeswalker',
    'Creature'
  ],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case GET_DECK :
        return {
          ...state,
          commander: action.payload.commander,
          deckList: action.payload.deckList,
          colorId: action.payload.colorId,
          loading: false,
          error: null,
          _id: action.payload._id
        }
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
         console.log(state.deckList)
         return {
           ...state,
           deckList: state.deckList.filter(card => {
              return !action.payload.find(removalCard => {
                return removalCard.name === card.name;
              })
           }),
           loading: false,
           error: null
         }
      case ADD_COMMANDER:
        return{
          ...state,
          commander: action.payload,
          colorId: action.payload.colorId
        }
      case DECK_FAIL:
        return {
          ...state,
          commander: null,
          colorId: '',
          deckList: [],
          error: action.payload,
          loading: false
        }
      default : 
        return{
            ...state
        }
  }
}