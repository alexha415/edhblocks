import React from 'react'
import {connect} from 'react-redux';
import {addCartToDeck} from '../../actions/deckActions';
import {clearCart} from '../../actions/cartActions';
import CartItem from './CartItem';
import {withRouter} from 'react-router-dom';
import './cart.css';
const DeckList = ({cart:{ cardCart }, addCartToDeck, clearCart, history}) => {


  const addCart = () => {
    addCartToDeck(cardCart);
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
        <a href="#/" className="btn cart-btn add-btn"onClick={addCart}>
          Add to Deck
        </a>
        <a href="#/" className="btn cart-btn clear-btn"onClick={clearCart}>
          Clear
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})
export default connect(mapStateToProps, {addCartToDeck, clearCart})(withRouter(DeckList))
