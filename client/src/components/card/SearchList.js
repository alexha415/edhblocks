import React, {useEffect, Fragment} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {filterCards} from '../../actions/searchActions';
import './searchList.css';

const SearchList = ({searchType, search: {cards, filtered}, deck: {deckList, commander}, cart: {cardCart}, filterCards}) => {

  useEffect( () => {
    filterCards([commander, ...deckList, ...cardCart]);
    //eslint-disable-next-line
  }, [deckList, cards, cardCart]);

  let showCards;
  filtered ? showCards = filtered : showCards = cards
  
  return (
  <Fragment>
    {showCards && showCards.length > 0 ? 
    <div className='grid search-grid'>
      {showCards.map(card => {
        return <Card key={card.id} card={card} commander={searchType}/>
      })} 
    </div>
    : (showCards ? <p className='no-result-text'>No results</p> : null)}
  </Fragment>
  )
}

const mapStateToProps = (state) => ({
  search: state.search,
  deck: state.deck,
  cart: state.cart
})
export default connect(mapStateToProps, {filterCards})(SearchList)
