import { 
  ADD_CARD} from "../actions/types"

const initialState = {
  deck: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case ADD_CARD :
          console.log(action.payload)
          return {
              ...state,
              deck: [...state.deck, action.payload],
              loading: false,
              error: null
          }
      default : 
          return{
              ...state
          }
  }
}