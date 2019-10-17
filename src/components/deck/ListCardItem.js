import React,{useState} from 'react'
import ImageModal from '../modal/ImageModal';
import {connect} from 'react-redux';
import {removeFromDeck} from '../../actions/deckActions';

const ListCardItem = ({card, removeFromDeck}) => {
  
  const [show, setShow] = useState(false);

    
  const showModal = () => {
      setShow(true);
  }
  const hideModal = () => {
      setShow(false);
  }

  return (
    <li key={card.name} className="deck-text">
        <div className='deck-item' onMouseOver={showModal} onMouseLeave={hideModal} onClick={removeFromDeck}>
            <ImageModal show={show} img={card.image}/>
            <a href="#/">
                <span>{card.name}</span>
            </a>
        </div>
    </li>)
}

export default connect(null,{removeFromDeck})(ListCardItem)
