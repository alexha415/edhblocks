import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';

export default combineReducers({
    search: searchReducer,
    deck: deckReducer
});