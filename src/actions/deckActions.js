import {
  ADD_CARD,
  CLEAR_DECK
} from './types';

export const addCard = (card) => async dispatch => {
  dispatch({
    type: ADD_CARD,
    payload: card
  })
}

export const clearDeck = () => async dispatch => {
  dispatch({
    type: CLEAR_DECK
  })
}