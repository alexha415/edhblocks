import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDecks} from '../../../actions/decksActions';
import {getDeck} from '../../../actions/deckActions';

const Decks = ({getDeck, getDecks, decks: {decks}}) => {

  useEffect( () => {
    console.log('test');
    getDecks();
  },[]);
  return (
    <div>
      {decks && decks.length > 0 && decks.map(deck =>(
      <Link to='/deck' key={deck._id} onClick={()=>{
        getDeck(deck._id)
      }}>{deck.commander.name}
        </Link>
      )
      )}
    </div>
  )
}

export default connect((state) => ({
  decks: state.decks
}), {getDecks, getDeck})(Decks)
