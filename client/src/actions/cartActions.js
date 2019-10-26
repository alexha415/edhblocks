import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from './types';

export const addCard = (cards) => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: cards
  })
}
export const removeCardFromCart = (card) => async dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: card
  })
}
export const clearCart = () => async dispatch => {
  dispatch({
    type: CLEAR_CART
  })
}