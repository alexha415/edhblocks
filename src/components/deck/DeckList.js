import React from 'react'
import {connect} from 'react-redux';
import {clearDeck, deleteCard} from '../../actions/deckActions';
import DeckItem from './DeckItem';

const DeckList = ({deck:{deckList,commander}, clearDeck,deleteCard}) => {


  const onClick = (e) => {
    e.preventDefault();
    clearDeck();
  }

  return (
    <div className = 'flex-container-col deck-container'>
      <div className="deck-list">
        {commander && <DeckItem key={commander.name} card={commander}/>}
        {deckList.map(card => (
          <DeckItem key={card.name} card={card}/>
        ))}
      </div>
      <a href="#/" className="btn clear-deck-btn"onClick={onClick}>
        CLEAR DECK
      </a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  deck: state.deck
})
export default connect(mapStateToProps, {clearDeck,deleteCard})(DeckList)
