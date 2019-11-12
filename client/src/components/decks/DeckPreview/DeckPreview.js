import React, {useState, useEffect} from 'react'
import styles from './DeckPreview.module.scss';
import {deleteDeck} from '../../../actions/decksActions';
import { connect } from 'react-redux';


const DeckPreview = ({deck, deleteDeck}) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [id , setId] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect( () => {    
    if(deck) {
      setName(deck.commander.name);
      setImage(deck.commander.image);
      setId(deck._id);
    }
  }, [JSON.stringify(deck)]);
  
  useEffect( () => {

  },[showModal]);

  const onDelete = () => {
    setShowModal(true);
  }

  const cancelDelete = () => {
    setShowModal(false);
  }
  const confirmDelete = () => {
    deleteDeck(id);
    setShowModal(false);
  }
  return (
  <div key={id} className={`${styles.selectedItem } flex-col`}> 
    <h4>{name}</h4>
    <div className={`${styles.mainContent} flex-row`}>
      {<img src={image}/>}
      <div className={`${styles.content} flex-col`}>
        <a href={`/deck/${id}`}>View</a>
        <a href="#/" onClick={onDelete}>Delete</a>
        <h4>Description</h4>
        <p>{deck.description}</p>
      </div>
    </div>
    {showModal ? <div className={`${styles.modal}`}>
      <div className={`${styles.cover}`} onClick={cancelDelete}></div>
      <div className={`${styles.confirmModal} flex-col`}>
        <h4 className={styles.confirmHeader}>Are you sure? This action cannot be undone</h4>
        <div className={`${styles.buttons} flex-row`}>
          <a href="#/" onClick={confirmDelete}>Confirm</a>
          <a href="#/" onClick={cancelDelete}>Cancel</a>
        </div>
      </div>
    </div> : ''}
  </div>
  )
}
export default connect(null, {deleteDeck})(DeckPreview);