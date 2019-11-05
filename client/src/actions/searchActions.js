import {
    GET_CARDS,
    SEARCH_CARDS,
    FILTER_CARDS,
    SEARCH_COMMANDER,
    CLEAR_SEARCH,
    SEARCH_LOADING
} from './types';

const search_root = 'https://api.scryfall.com/cards/search';
/*const searchCommanderString = `${search_root}?q=${query}+identity%3A${colorIdentity}+identity>colorless+is%3Acommander`;*/
//colorIdenty: Commander color identity
//query: string to search with

export const searchCards = (query,order) => async dispatch => {
        let queryString = '';

        if(order) {
            Object.keys(order).forEach( key => {
            queryString += `${key}${order[key]}`
            })
             queryString += '&';
        }

        Object.keys(query).forEach( (key,index) => {
            if(index !== 0) queryString += '%20'
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
        dispatch(loading())
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

export const clearSearch = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_SEARCH
        })
    } catch (error) {
        
    }
}
export const loading = () => async dispatch => {
    dispatch({
        type: SEARCH_LOADING
    })
}