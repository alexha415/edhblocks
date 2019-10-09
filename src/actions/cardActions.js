import {
    GET_CARDS,
    SEARCH_CARDS
} from './types';

export const searchCards = (query) => async dispatch => {
       try {
           
        const search_root = 'https://api.scryfall.com/cards/search';
        const res = await fetch(`${search_root}?q=${query}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_CARDS,
            payload: data.data
        })
       } catch (error) {
           
       }
}

export const getCards = () => async dispatch => {
    try {
        dispatch({
            type: GET_CARDS
        })
    } catch (error) {
        
    }
}