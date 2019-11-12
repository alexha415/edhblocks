import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import decksReducer from './decksReducer';
import symbolReducer from './symbolReducer'
export default combineReducers({
    search: searchReducer,
    deck: deckReducer,
    cart: cartReducer,
    auth: authReducer,
    decks: decksReducer,
    symbols: symbolReducer
});