import React, {useState} from 'react'
import {connect} from 'react-redux';
import {removeFromDeck} from '../../actions/deckActions';
import ImageModal from '../modal/ImageModal';

const CardTypeList = ({list, category, removeFromDeck}) => {

    const [show, setShow] = useState(false);

    
    const showModal = () => {
        setShow(true);
    }
    const hideModal = () => {
        setShow(false);
    }

    return (
        <div style={{margin: '2rem'}}>
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return(
                    <li key={card.name} className="deck-text">
                        <div className='deck-item' onMouseOver={showModal} onMouseLeave={hideModal}>
                            <ImageModal show={show} img={card.image}/>
                            <a href="#/">
                                <span>{card.name}</span>
                            </a>
                        </div>
                    </li>)
                })}
            </ul>   
        </div>
    )
}

export default connect( null, {removeFromDeck})(CardTypeList)
