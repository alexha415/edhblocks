import { 
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../actions/types"

const initialState = {
  cardCart: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case ADD_TO_CART :
        return {
            ...state,
            cardCart: [...state.cardCart, action.payload],
            loading: false,
            error: null
        }
      case CLEAR_CART :
        return {
          ...state,
          cardCart: [],
          loading: false,
          error: null
        }
        case REMOVE_FROM_CART :
            return {
              ...state,
              cardCart: state.cardCart.filter(card => {
                return card.name !== action.payload.name
              })
            }
      default : 
        return{
            ...state
        }
  }
}