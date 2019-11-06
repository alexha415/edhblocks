import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchList from '../../card/SearchList';
import Searchbar from'../../layout/header/Searchbar';
import CartList from '../../cart/CartList';
import {getDeck} from '../../../actions/deckActions';
import './editDeck.css';

const EditDeck = ({deck: {_id}, match, getDeck}) => {
  useEffect( () => {
    if(!_id && _id !== match.params.id) {
      getDeck(match.params.id);
    }
    //eslint-disable-next-line
  },[]);
  return (
    <div className='flex-row cart'>
      <div className="flex-col search-container">
        <h4>Search Cards</h4>
        <Searchbar/>
      <SearchList/>
      </div>
      <CartList/>
    </div>
  )
}

export default connect(state => ({
  deck: state.deck
}), {getDeck})(withRouter(EditDeck))
