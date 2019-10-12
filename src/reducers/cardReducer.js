import { 
SEARCH_CARDS, 
GET_CARDS,
FILTER_CARDS,
SEARCH_COMMANDER
 } from "../actions/types"

const initialState = {
    cards: {},
    commanders: {},
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
            }
        case SEARCH_COMMANDER:
            return {
                ...state,
                commanders: action.payload,
                loading: false,
                error: null
            }
        default : 
            return{
                ...state
            }
    }
}