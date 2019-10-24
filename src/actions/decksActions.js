import {
GET_DECKS,
ADD_DECK,
EDIT_DECK,
DECKS_ERROR,
SET_CURRENT
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
  const newDeck = {
    commander,
    cards,
    colorId
  }
  try {
    const res = await fetch('/api/decks', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Authentication": JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify(newDeck)
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

export const editDeck = (deck) => async dispatch => {
  try {
    console.log(deck);
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

export const deleteDeck = (did) => async dispatch => {

}

export const setCurrent = (did) => dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: did
  })
}