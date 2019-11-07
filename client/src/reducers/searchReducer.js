import { 
SEARCH_CARDS,
FILTER_CARDS,
SEARCH_COMMANDER,
CLEAR_SEARCH,
SEARCH_LOADING
 } from "../actions/types"

const initialState = {
    cards: null,
    commanders: null,
    current: null,
    loading: false,
    error: null,
    filtered: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SEARCH_CARDS :
            return {
                ...state,
                cards: action.payload,
                loading: false,
                error: null
            }
        case FILTER_CARDS: 
            return{
                ...state,
                filtered: state.cards.filter(searchCard => (
                    !action.payload.find(card => searchCard.name === card.name)
                )),
                loading: false,
                error: null
            }
        case SEARCH_COMMANDER:
            return {
                ...state,
                commanders: action.payload,
                loading: false,
                error: null
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                commanders: [],
                loading: false,
                error: null
            }
        case SEARCH_LOADING:
            return {
                ...state,
                loading: true
            }
        default : 
            return{
                ...state
            }
    }
}