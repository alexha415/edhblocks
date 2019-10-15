import React from 'react'
import {connect} from 'react-redux';
import {removeCardFromCart} from '../../actions/cartActions';

const DeckItem = ({card, removeCardFromCart}) => {

  const onClick = (e) => {
    e.preventDefault();
    removeCardFromCart(card);
  }
  return (
    <div className='deck-item' >
      <a href="#/" className='btn' onClick={onClick}>
        <p>
        {card.name}
        </p>
      </a>
    </div>
  )
}

export default connect(null, {removeCardFromCart})(DeckItem)
