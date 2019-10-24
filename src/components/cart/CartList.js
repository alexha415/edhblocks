import React from 'react'
import {connect} from 'react-redux';
import {addCartToDeck} from '../../actions/deckActions';
import {editDeck, addDeck} from '../../actions/decksActions';
import {clearCart} from '../../actions/cartActions';
import CartItem from './CartItem';
import {withRouter} from 'react-router-dom';
import './cart.css';

const DeckList = ({deck , cart:{ cardCart }, editDeck, addCartToDeck, clearCart, history}) => {

  const addCart = async () => {
    const updatedDeck = {
      ...deck,
      deckList : [...deck.deckList, ...cardCart]
    }
    editDeck(updatedDeck);
    clearCart();
    history.push('/deck');
  }
  
  return (
    <div className = 'flex-container-col cart-container'>
      <div className="cart-list">
        {cardCart.map(card => {
          return (<CartItem key={card.name} card={card}/>)
        }
        )}
      </div>
      <div>
        <a href="#/" className="cart-btn add-btn"onClick={addCart}>
          Add to Deck
        </a>
        <a href="#/" className="cart-btn clear-btn"onClick={clearCart}>
          Clear
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  deck: state.deck
})
export default connect(mapStateToProps, {editDeck, addCartToDeck, clearCart})(withRouter(DeckList))
