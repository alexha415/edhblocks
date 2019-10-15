import {
  ADD_CART,
  CLEAR_DECK,
  ADD_COMMANDER,
  REMOVE_FROM_DECK
} from './types';

export const addCartToDeck = (cards) => async dispatch => {
  dispatch({
    type: ADD_CART,
    payload: cards
  })
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