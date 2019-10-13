import {
    GET_CARDS,
    SEARCH_CARDS,
    FILTER_CARDS,
    SEARCH_COMMANDER
} from './types';

const search_root = 'https://api.scryfall.com/cards/search';
/*const searchCommanderString = `${search_root}?q=${query}+identity%3A${colorIdentity}+identity>colorless+is%3Acommander`;*/
//colorIdenty: Commander color identity
//query: string to search with

export const searchCards = (query) => async dispatch => {
        let queryString = '';
        Object.keys(query).forEach( key => {
            if(queryString !== ''){
                queryString += '+';
            }
            queryString += `${key}${query[key]}`
        })
        try {
            const res = await fetch(`${search_root}?${queryString}`);
            const data = await res.json();
            dispatch({
                type: SEARCH_CARDS,
                payload: data.data
            })
        } catch (error) {
            
        }
}
export const searchCommander = (query) => async dispatch => {
    let queryString = '';
    Object.keys(query).forEach( key => {
        if(queryString !== ''){
            queryString += '+';
        }
        queryString += `${key}${query[key]}`
    })
    try {
        const res = await fetch(`${search_root}?${queryString}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_COMMANDER,
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

export const filterCards = (cards) => async dispatch => {
    try {
        dispatch({
            type: FILTER_CARDS,
            payload: cards
        })
    } catch (error) {
        
    }
}