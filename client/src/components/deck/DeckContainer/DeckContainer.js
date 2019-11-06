import React from 'react'
import {connect} from 'react-redux';
import CardTypeList from '../CardTypeList/CardTypeList';
import {Link} from 'react-router-dom';
import './deckContainer.css';

const DeckContainer = ({removeMode, handleClick, deck : {deckList, categories}}) => {
  
  const addLink = <Link to='/edit' className="edit-deck-btn">Add Cards</Link>;

  let sortedDeck = [];
  const sortDeck = () => {
    categories.forEach( category => {
      let cardList = deckList.filter(card => {
        return card.cardType === category 
      })
      cardList.length > 0 && sortedDeck.push(cardList);
    })
    sortedDeck.sort( (a,b) => {
      return Object.keys(a) > Object.keys(b) ? -1 : 1;
    })
  }

  if(deckList) sortDeck()

  const emptyDeckDisplay = () => {
    return (
    <div className="empty-deck-container">
      <h4>Add Some Cards To Your Deck</h4>
      {addLink}
    </div>
    )
  }
  const deckDisplay = () => {
    return (
    <div className="secondary deck-grid">
      {sortedDeck.map(categoryList => {
        const categoryName = categoryList[0].cardType;
         return <CardTypeList removeMode={removeMode} handleClick={handleClick} key={categoryName} category={categoryName} list={categoryList}/>
        })
      }
    </div>
    )
  }

  return (
    <div className='decklist-container'>
      {deckList.length !== 0 ? deckDisplay() : emptyDeckDisplay()}
    </div>
  )
}

export default connect(state => ({
  deck: state.deck
}))(DeckContainer)
