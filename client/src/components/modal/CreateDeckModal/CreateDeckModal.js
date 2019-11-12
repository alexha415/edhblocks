import React, {useState} from 'react'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {addCommander} from '../../../actions/deckActions';
import {clearSearch} from '../../../actions/searchActions';
import {addDeck} from '../../../actions/decksActions';
import styles from './CreateDeckModal.module.scss'

const CreateDeckModal = ({card, cancel, addCommander, addDeck, clearSearch, history}) => {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });
  const onSubmit = () => {
    const {name, description} = form;
    addCommander(card);
    clearSearch();
    addDeck({
      commander: card,
      cards: [],
      colorId: card.colorId,
      name,
      description
    })
    history.push('/decks');
  }
  const onChange = (e) => {
    e.preventDefault();
    setForm({...form, [e.target.name]: e.target.value})
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
            <input type="text" name="name" value={form.name} placeholder='Name of your deck' onChange={onChange}/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="Description">Description</label>
            <textarea type="text" name="description" value={form.description} maxLength='256' placeholder="Describe your deck" onChange={onChange} required/>
          </div>
          <div className={styles.btnContainer}>
            <a href="#/" className={styles.btn} onClick={onSubmit}>Create Deck</a>
            <a href="#/" className={styles.btn} onClick={cancel}>Cancel</a>
          </div>
        </form>
      </div>
      <div className={styles.cover} onClick={cancel}/>
    </div>
  )
}

export default connect(null, {addCommander, addDeck, clearSearch})(withRouter(CreateDeckModal))
