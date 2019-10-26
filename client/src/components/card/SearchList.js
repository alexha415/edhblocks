import React, {useEffect} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {filterCards} from '../../actions/searchActions';
import './searchList.css';

const SearchList = ({searchType, search: {cards, filtered}, deck: {deckList, commander}, cart: {cardCart}, filterCards}) => {

  useEffect( () => {
    commander = {
      name: 'test'
    }
    filterCards([commander,...deckList, ...cardCart]);
  }, [deckList, cards, cardCart]);

  let showCards;
  filtered ? showCards = filtered : showCards = cards
  
  return (
  <div className='grid search-grid'>
    {showCards && showCards.length > 0 && showCards.map(card => {
      return <Card key={card.id} card={card} commander={searchType}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  search: state.search,
  deck: state.deck,
  cart: state.cart
})
export default connect(mapStateToProps, {filterCards})(SearchList)
