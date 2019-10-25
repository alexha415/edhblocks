import {
  ADD_CART,
  CLEAR_DECK,
  ADD_COMMANDER,
  REMOVE_FROM_DECK,
  GET_DECK,
  DECK_FAIL,
  EDIT_DECK,
  DECKS_ERROR
} from './types';

export const addCartToDeck = (cards) => (dispatch) => {
    dispatch({
      type: ADD_CART,
      payload: cards
    });
    return Promise.resolve();
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

// export const removeFromDeck = (card) => async dispatch => {
//   dispatch({
//     type: REMOVE_FROM_DECK,
//     payload: card
//   })
// }

export const removeFromDeck = (cards) => async (dispatch,getState) => {
  dispatch({
    type: REMOVE_FROM_DECK,
    payload: cards
  })
  dispatch(editDeck(getState().deck));
  console.log(getState().deck);
  dispatch(getDeck(getState().deck._id));
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
export const editDeck = (deck) => async dispatch => {
  try {
    const res = await fetch(`/api/decks/${deck._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type":"application/json",
        "Authentication": JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify(deck)
    })
    const data = await res.json();
    
    dispatch({
      type: EDIT_DECK,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: DECKS_ERROR,
      payload: error.msg
    })
  }
}