import {
GET_DECKS,
ADD_DECK,
EDIT_DECK,
DECKS_ERROR
} from './types';

export const getDecks = () => async dispatch => {
  try {
    const res = await fetch('/api/decks', {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authentication": JSON.parse(localStorage.getItem('token'))
      }
    })
    const data = await res.json();
    dispatch({
      type: GET_DECKS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: DECKS_ERROR,
      payload: error.msg
    })
  }
}

export const addDeck = (deck) => async dispatch => {
  const {commander, cards, colorId} = deck;
  try {
    const res = await fetch('/api/decks', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Authentication": JSON.parse(localStorage.getItem('token'))
      },
      body: {
        commander,
        cards,
        colorId
      }
    })
    const data = await res.json();
    dispatch({
      type: ADD_DECK,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: DECKS_ERROR,
      payload: error.msg
    })
  }
}

export const editDeck = (deckId) => async dispatch => {

}

export const deleteDeck = (deckId) => async dispatch => {

}