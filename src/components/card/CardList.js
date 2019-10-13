import React, {useEffect} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {filterCards} from '../../actions/cardActions';

const CardList = ({card: {cards, filtered}, deck: {deckList}, filterCards}) => {

  useEffect( () => {
    filterCards(deckList);
  }, [deckList, cards, filterCards]);

  let showCards;
  filtered ? showCards = filtered : showCards = cards
  
  return (
  <div className='container card-list-container'>
    {showCards && showCards.length > 0 && showCards.map(card => {
      return <Card key={card.id} card={card}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  card: state.card,
  deck: state.deck
})
export default connect(mapStateToProps, {filterCards})(CardList)
