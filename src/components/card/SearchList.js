import React, {useEffect} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {filterCards} from '../../actions/searchActions';
const SearchList = ({searchType, search: {cards, filtered}, deck: {deckList}, filterCards}) => {

  useEffect( () => {
    filterCards(deckList);
  }, [deckList, cards, filterCards]);

  let showCards;
  filtered ? showCards = filtered : showCards = cards
  
  return (
  <div className='container card-list-container'>
    {showCards && showCards.length > 0 && showCards.map(card => {
      return <Card key={card.id} card={card} commander={searchType}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  search: state.search,
  deck: state.deck
})
export default connect(mapStateToProps, {filterCards})(SearchList)
