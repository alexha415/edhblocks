import {
  ADD_CART,
  CLEAR_DECK,
  ADD_COMMANDER,
  REMOVE_FROM_DECK,
  GET_DECK,
  DECK_FAIL
} from './types';

export const addCartToDeck = (cards, callback) => async dispatch => {
  dispatch({
    type: ADD_CART,
    payload: cards
  });
}
export const clearDeck = () => async dispatch => {
  dispatch({
    type: CLEAR_DECK
  })
}
export const addCommander = (card) => async dispatch => {
  dispatch({
    type: ADD_COMMANDER,
    payload: card
  })
}

export const removeFromDeck = (card) => async dispatch => {
  dispatch({
    type: REMOVE_FROM_DECK,
    payload: card
  })
}

export const getDeck = (did) => async dispatch => {
  try {
    const res = await fetch(`/api/decks/${did}`, {
      method: 'GET',
      headers: {
        "Authentication" : JSON.parse(localStorage.getItem('token'))
      }
    });
    const data = await res.json();
    if(!res.ok) throw Error(data);
    dispatch({
      type: GET_DECK,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: DECK_FAIL,
      payload: error
    });
  }
}