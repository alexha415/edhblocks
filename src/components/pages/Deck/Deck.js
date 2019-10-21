import React from 'react'
import {connect} from 'react-redux'
import DeckContainer from '../../deck/deckContainer/DeckContainer';
import './deck.css';

const Deck = ({commander}) => {
    return (
        <div className='deck flex-container-col'>
            <div className='flex-container-col deck-header' style ={{alignItems:'flex-end', marginRight: '2rem'}}>
                <h4>{commander && commander.name}</h4>
                {<img src={commander && commander.image} alt = 'Commander 'style={{minWidth: '20%', width: '20%', minHeight: '200px'}}/>}
            </div>
            <DeckContainer/>
        </div>
    )
}

const mapStateToProps = state =>({
    commander: state.deck.commander
})
export default connect(mapStateToProps)(Deck)
