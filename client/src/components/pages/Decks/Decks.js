import React, {useEffect, useState} from 'react';
import DeckCard from '../../decks/DeckCard';
import {connect} from 'react-redux';
import {getDecks} from '../../../actions/decksActions';
import {getManaSymbols} from '../../../actions/symbolActions';

import styles from './decks.module.scss';
import Spinner from '../../layout/spinner/Spinner';
import DecksItem from '../../decks/DecksItem/DecksItem';
import DeckPreview from '../../decks/DeckPreview/DeckPreview';

const Decks = ({getDecks, getManaSymbols, decks: {decks, loading}}) => {

  useEffect( () => {
    getDecks();
    getManaSymbols();
    //eslint-disable-next-line
  },[]);

  const [currentDeck, setCurrentDeck] = useState(null);

  const onClick = (current) => {
    setCurrentDeck(current);
  }

  return (
    <div className={`${styles.decks} flex-col`}>
      <h4 className={styles.header}>Decks</h4>
      <div className={`flex-row`}>
        <div className={`${styles.decksContainer} flex-col`}>
          {decks && decks.map( deck => <DecksItem key={deck._id} deck={deck} handleClick={onClick} active={currentDeck && currentDeck._id === deck._id ? true : false}/> )}
        </div>
        {currentDeck && <DeckPreview deck={currentDeck}/>}
      </div>
      
     
    </div>
    
  )
}

export default connect((state) => ({
  decks: state.decks
}), {getDecks, getManaSymbols})(Decks)
