import React, {Fragment, useState} from 'react'
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {clearSearch} from '../../../actions/searchActions';
import {addCommander} from '../../../actions/deckActions';
import {addDeck} from '../../../actions/decksActions';

import Card from '../../card/Card';
import CreateDeckModal from '../../modal/CreateDeckModal/CreateDeckModal';
import './commanderList.css';

const CommanderList = ({search: {commanders}, addDeck, clearSearch, addCommander, history}) => {

  const [showModal, setShowModal] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const onClick = (card) => {
    setShowModal(true);
    setClickedCard(card);
  }
  const hideModal = () => {
    setShowModal(false);
  }
  
  const modal = () => {
    if (showModal) return <CreateDeckModal card={clickedCard} cancel={hideModal}/>
  }
  const searchResults = () => {
    return <div className='container card-list-container'>
      {commanders.map(card => {
        return (
          <Card key={card.id} card={card} commander={card} handleClick={showModal ? null : onClick}/>
        )
      })}
      {modal()}
    </div>
    }
  const emptySearch = () => {
    if(commanders)
    return <p className='no-result-text'>No Results</p>
  }
  return (
    <Fragment>
      {commanders && commanders.length > 0 ?
        searchResults() : emptySearch()
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  search: state.search
})
export default connect(mapStateToProps, {clearSearch, addCommander, addDeck})(withRouter(CommanderList))
