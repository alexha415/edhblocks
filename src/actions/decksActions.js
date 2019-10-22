import {
GET_DECKS,
ADD_DECK,
EDIT_DECK,
DECKS_ERROR
} from './types';

export const getDecks = () => async dispatch => {
  console.log('test2');
  try {
    const res = await fetch('/api/decks', {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authentication": JSON.parse(localStorage.getItem('token'))
      }
    })
    console.log(res);
    const data = await res.json();
    console.log(data);
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
  console.log(newDeck);
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

export const editDeck = (deckId) => async dispatch => {

}

export const deleteDeck = (deckId) => async dispatch => {

}