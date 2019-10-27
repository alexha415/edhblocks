import React from 'react'
import {connect} from 'react-redux';
import {removeCardFromCart} from '../../actions/cartActions';
import style from './cart.css';

const DeckItem = ({card, removeCardFromCart}) => {

  const onClick = (e) => {
    e.preventDefault();
    removeCardFromCart(card);
  }
  return (
    <div className='cart-item' >
      <a href="#/" onClick={onClick}>
        <p>
        {card.name}
        </p>
      </a>
    </div>
  )
}

export default connect(null, {removeCardFromCart})(DeckItem)
