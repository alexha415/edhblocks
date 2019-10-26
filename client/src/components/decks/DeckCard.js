import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrent} from '../../actions/decksActions';
import './deckCard.css';

const DeckCard = ({deck, setCurrent}) => {
    return (
        <div className="deck-card flex-container-col">
            <span className="deck-card-header">
                <span>{deck.commander.name}</span>
            </span>
            <span className="deck-card-body">
                <img src={deck.commander.image} alt=""/>
            </span>
            <span className="flex-container-row deck-card-footer">
                <Link to='/deck' onClick={()=>{
                    setCurrent(deck._id);
                    }}>
                View
                </Link>
                <Link to='/deck' onClick={()=>{
                    setCurrent(deck._id);
                    }}>
                Delete
                </Link>
            </span>
        </div>
    )
}

export default connect(null, {setCurrent})(DeckCard)
