import React, {useEffect} from 'react';
import DeckCard from '../../decks/DeckCard';
import {connect} from 'react-redux';
import {getDecks} from '../../../actions/decksActions';
import './decks.css';

const Decks = ({getDecks, decks: {decks}}) => {

  useEffect( () => {
    getDecks();
    //eslint-disable-next-line
  },[]);
  return (
    <div className="grid decks" style={{marginTop: '2rem'}}>
      {decks && decks.length > 0 && decks.map(deck =>{
        return <DeckCard key={deck._id} deck={deck}/>
      }
      )}
    </div>
  )
}

export default connect((state) => ({
  decks: state.decks
}), {getDecks})(Decks)
