import React from 'react'
import {connect} from 'react-redux';
import {setCurrent} from '../../actions/decksActions';
import {getDeck} from '../../actions/deckActions';
import {withRouter} from 'react-router-dom';
import './deckCard.css';

const DeckCard = ({deck, setCurrent, getDeck, history}) => {
    return (
        <div className="deck-card flex-col">
            <span className="deck-card-header">
                <span>{deck.commander.name}</span>
            </span>
            <span className="deck-card-body">
                <img src={deck.commander.image} alt=""/>
            </span>
            <span className="flex-row deck-card-footer">
                <a href="#/" onClick={()=>{
                    setCurrent(deck._id).then( () => 
                    getDeck(deck._id)).then( () => {
                        history.push(`/deck/${deck._id}`);
                    });
                    }}>
                View
                </a>
                <a href="#/" to='/deck' onClick={()=>{
                    setCurrent(deck._id).then( () => 
                    getDeck(deck._id));
                    }}>
                Delete
                </a>
            </span>
        </div>
    )
}

export default connect(null, {setCurrent, getDeck})(withRouter(DeckCard))
