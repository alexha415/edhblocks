import { 
SEARCH_CARDS, 
GET_CARDS,
FILTER_CARDS
 } from "../actions/types"

const initialState = {
    cards: {},
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
        default : 
            return{
                ...state
            }
    }
}