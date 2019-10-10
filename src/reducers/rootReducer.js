import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import deckReducer from './deckReducer';

export default combineReducers({
    card: cardReducer,
    deck: deckReducer
});