import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import DeckContainer from '../../deck/deckContainer/DeckContainer';
import {getDeck} from '../../../actions/deckActions';
import './deck.css';


const Deck = ({did,commander,getDeck}) => {
    useEffect( () => {
        if(did) getDeck(did)
    },[]);
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
    commander: state.deck.commander,
    did: state.decks.current
})
export default connect(mapStateToProps,{getDeck})(Deck)
