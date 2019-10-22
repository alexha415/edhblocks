import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getDecks} from '../../../actions/decksActions';

const Decks = ({getDecks, decks: {decks}}) => {
  useEffect( () => {
    console.log('test');
    getDecks();
  },[]);
  return (
    <div>
      {decks && decks.length > 0 && decks.map( deck => {
        return (<div>{deck.commander.name}</div>)
      })}
    </div>
  )
}

export default connect((state) => ({
  decks: state.decks
}), {getDecks})(Decks)
