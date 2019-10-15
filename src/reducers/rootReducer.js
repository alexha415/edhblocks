import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    search: searchReducer,
    deck: deckReducer,
    cart: cartReducer
});