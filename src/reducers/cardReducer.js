import { 
    SEARCH_CARDS, 
    GET_CARDS } from "../actions/types"

const initialState = {
    cards: {},
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SEARCH_CARDS :
            console.log(action.payload)
            return {
                ...state,
                cards: action.payload,
                loading: false,
                error: null
            }
        case GET_CARDS: 
            return{
                
            }
        default : 
            return{
                ...state
            }
    }
}