import React from 'react'
import {connect} from 'react-redux';
import {clearDeck} from '../../actions/deckActions';

const DeckList = ({deck:{deckList}, clearDeck}) => {

  console.log(deckList);

  const onClick = (e) => {
    e.preventDefault();
    clearDeck();
  }
  return (
    <div>
      <a href="#" onClick={onClick}>
        CLEAR DECK
      </a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  deck: state.deck
})
export default connect(mapStateToProps, {clearDeck})(DeckList)
