import React,{useState, useEffect, useRef} from 'react'
import ImageModal from '../../modal/ImageModal';
import {connect} from 'react-redux';
import {removeFromDeck} from '../../../actions/deckActions';
import './listcarditem.css';

const ListCardItem = ({key,handleClick, removeMode, card, removeFromDeck}) => {
  
  const [show, setShow] = useState(false);
  const [removeFlag, setRemoveFlag] = useState(false);

  
  const onRemove = () => {
    setShow(false);
    setRemoveFlag(!removeFlag);
    //removeFromDeck(card);
  }
  useEffect( () => {
    handleClick(card, removeFlag);
  },[removeFlag]);

  const showModal = () => {
      setShow(true);
  }
  const hideModal = () => {
      setShow(false);
  }

  return (
    <li key={card.name}>
        <div className={`${removeFlag ? 'remove-item': ''} deck-item`} onMouseOver={showModal} onMouseLeave={hideModal} onClick={removeMode ? onRemove : null}>
            <ImageModal show={show} img={card.image}/>
            <a href="#/">
                <span className="card-text">{card.name}</span>
            </a>
        </div>
    </li>)
}

export default connect(null,{removeFromDeck})(ListCardItem)
