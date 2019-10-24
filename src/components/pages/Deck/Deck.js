import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import DeckContainer from '../../deck/deckContainer/DeckContainer';
import {getDeck} from '../../../actions/deckActions';
import './deck.css';


const Deck = ({did, commander ,getDeck}) => {

    useEffect( () => {
        if(did) getDeck(did)
    },[]);
    return (
        <div className='deck flex-container-row'>
            <DeckContainer/>
            <div className='flex-container-col deck-header' style ={{alignItems:'flex-end', marginRight: '2rem'}}>
                <h4>{commander && commander.name}</h4>
                {<img src={commander && commander.image} alt = 'Commander 'style={{width: '65%'}}/>}
                <span>
                    <Link to='/edit' className="edit-deck-btn">Add Cards</Link>
                    <Link to='#' className="edit-deck-btn">Remove Cards</Link>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    commander: state.deck.commander,
    did: state.decks.current
})
export default connect(mapStateToProps,{getDeck})(Deck)
