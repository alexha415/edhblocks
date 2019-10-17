import React from 'react'
import {connect} from 'react-redux';
import CardTypeList from '../deck/CardTypeList';

const DeckContainer = ({deck : {deckList, categories}}) => {
  
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
    console.log(sortedDeck);
  }

  sortDeck();

  return (
    <div className="deck-list-display">
      {sortedDeck.map(categoryList => {
        const categoryName = categoryList[0].cardType;
        return <CardTypeList key={categoryName} category={categoryName} list={categoryList}/>
      })}
    </div>
  )
}

export default connect(state => ({
  deck: state.deck
}))(DeckContainer)
