import React from 'react'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {addCommander} from '../../../actions/deckActions';
import {clearSearch} from '../../../actions/searchActions';
import {addDeck} from '../../../actions/decksActions';
import styles from './CreateDeckModal.module.scss'

const CreateDeckModal = ({card, cancel, addCommander, addDeck, clearSearch, history}) => {
  const onSubmit = () => {
    addCommander(card);
    clearSearch();
    addDeck({
      commander: card,
      cards: [],
      colorId: card.colorId
    })

    history.push('/decks');
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} flex-row`}>
        <div className={`${styles.imageContainer} flex-col`}>
          <img src={card.image} alt={card.name}/>
        </div>
        <form  className={`${styles.form} flex-col`}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Name of your deck'/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="Description">Description</label>
            <textarea type="text" name="description" maxLength='256' placeholder="Describe your deck" required wrap/>
          </div>
          <div className={styles.btnContainer}>
            <a href="#" className={styles.btn} onClick={onSubmit}>Create Deck</a>
            <a href="#" className={styles.btn} onClick={cancel}>Cancel</a>
          </div>
        </form>
      </div>
      <div className={styles.cover} onClick={cancel}/>
    </div>
  )
}

export default connect(null, {addCommander, addDeck, clearSearch})(withRouter(CreateDeckModal))
