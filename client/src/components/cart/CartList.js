import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {addCartToDeck} from '../../actions/deckActions';
import {editDeck, addDeck} from '../../actions/decksActions';
import {clearCart} from '../../actions/cartActions';
import CartItem from './CartItem';
import {withRouter} from 'react-router-dom';
import './cart.css';

const DeckList = ({deck , cart:{ cardCart }, editDeck, addCartToDeck, clearCart, history}) => {

  const addCart = () => {
    addCartToDeck(cardCart).then( () => {
      history.push('/deck');
    });
  }

  useEffect( () => {
    editDeck(deck);
    clearCart();
  }, [JSON.stringify(deck.deckList)]);

  return (
    <div className = 'flex-container-col cart-container'>
      <div className="cart-list">
        {cardCart.map(card => {
          return (<CartItem key={card.name} card={card}/>)
        }
        )}
      </div>
      <div>
        <a href="#/" className="primary cart-btn add-btn"onClick={addCart}>
          Add to Deck
        </a>
        <a href="#/" className="primary cart-btn clear-btn"onClick={clearCart}>
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
