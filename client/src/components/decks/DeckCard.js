import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrent, deleteDeck} from '../../actions/decksActions';
import {getDeck} from '../../actions/deckActions';
import {withRouter} from 'react-router-dom';
import './deckCard.css';

const DeckCard = ({deck, setCurrent, getDeck, history, deleteDeck}) => {
    return (
        <div className="deck-card flex-container-col">
            <span className="deck-card-header">
                <span>{deck.commander.name}</span>
            </span>
            <span className="deck-card-body">
                <img src={deck.commander.image} alt=""/>
            </span>
            <span className="flex-container-row deck-card-footer">
                <a onClick={()=>{
                    setCurrent(deck._id).then( () => 
                    getDeck(deck._id)).then( () => {
                        history.push(`/deck/${deck._id}`);
                    });
                    }}>
                View
                </a>
                <a to='#' onClick={(e)=>{
                    e.preventDefault();
                    deleteDeck(deck._id);
                    }}>
                Delete
                </a>
            </span>
        </div>
    )
}

export default connect(null, {setCurrent, getDeck, deleteDeck})(withRouter(DeckCard))
