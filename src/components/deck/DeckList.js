import React from 'react'
import {connect} from 'react-redux';
import {clearDeck} from '../../actions/deckActions';
import DeckItem from './DeckItem';

const DeckList = ({deck:{deckList}, clearDeck}) => {


  const onClick = (e) => {
    e.preventDefault();
    clearDeck();
  }
  return (
    <div className = 'flex-container-col deck-container'>
      <div className="deck-list">
        {deckList.map(card => (
          <p key={card.name} className='deck-item'>{card.name}</p>
        ))}
      </div>
      <a href="#" className="btn clear-deck-btn"onClick={onClick}>
        CLEAR DECK
      </a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  deck: state.deck
})
export default connect(mapStateToProps, {clearDeck})(DeckList)
