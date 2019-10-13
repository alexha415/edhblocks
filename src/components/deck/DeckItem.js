import React from 'react'
import {connect} from 'react-redux';
import {deleteCard} from '../../actions/deckActions';

const DeckItem = ({card, deleteCard}) => {

  const onClick = (e) => {
    e.preventDefault();
    deleteCard(card);
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

export default connect(null, {deleteCard})(DeckItem)
