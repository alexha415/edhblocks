import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrent, getDecks} from '../../../actions/decksActions';

const Decks = ({getDecks, setCurrent, decks: {decks}}) => {

  useEffect( () => {
    console.log('test');
    getDecks();
  },[]);
  return (
    <div>
      {decks && decks.length > 0 && decks.map(deck =>(
      <Link to='/deck' key={deck._id} onClick={()=>{
        setCurrent(deck._id);
      }}>{deck.commander.name}
        </Link>
      )
      )}
    </div>
  )
}

export default connect((state) => ({
  decks: state.decks
}), {getDecks, setCurrent})(Decks)
