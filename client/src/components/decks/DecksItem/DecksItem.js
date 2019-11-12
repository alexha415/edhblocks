import React from 'react'
import styles from './DecksItem.module.scss';
import ColorSymbol from '../../ColorSymbol/ColorSymbol';

const DecksItem = ({deck, handleClick, active}) => {
  
  const onClick = (e) => {
    e.preventDefault();
    handleClick(deck)
  }
  
  const {name, deckList, colorId} = deck;
  return (
    <div className={`${styles.decksItem} flex-row ${active ? styles.active : styles.inactive}`} onClick={onClick}>
      {/*Capitalizes first character of each deck name*/}
      <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
      <p>Cards: {deckList.length + 1}</p>
      <ColorSymbol colors={colorId}/>
    </div>
  )
}

export default DecksItem;