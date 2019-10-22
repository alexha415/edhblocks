import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

export default combineReducers({
    search: searchReducer,
    deck: deckReducer,
    cart: cartReducer,
    auth: authReducer
});