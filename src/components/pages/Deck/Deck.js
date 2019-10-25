import React, {Fragment, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import DeckContainer from '../../deck/deckContainer/DeckContainer';
import {getDeck, removeFromDeck} from '../../../actions/deckActions';
import {editDeck} from '../../../actions/decksActions';
import './deck.css';


const Deck = ({deck, did, deckList, commander , getDeck, removeFromDeck, editDeck}) => {

    useEffect( () => {
        if(did) getDeck(did)
    },[]);



    const toggleRemoveMode = (e) => {
        e.preventDefault();
        setRemoveMode(!removeMode);
    }
    const onRemove = (e) => {
        e.preventDefault();
        removeFromDeck(removalList);
    }
    const defaultButtons = 
    <Fragment>
        <Link to='/edit' className="edit-deck-btn">Add Cards</Link>
        <Link to='#' className="edit-deck-btn" onClick={toggleRemoveMode}>Remove Cards</Link>
    </Fragment>

    const removeButtons = 
    <Fragment>
        <Link to='#' className="edit-deck-btn" onClick={onRemove}>Confirm</Link>
        <Link to='#' className="edit-deck-btn" onClick={toggleRemoveMode}>Cancel</Link>
    </Fragment>
    
    const [removeMode, setRemoveMode] = useState(false);
    const [removalList, setRemovalList] = useState([]);

    const handleRemoveClick = (targetCard, flag) => {
        let newList;
        if(flag){
            newList = [...removalList, targetCard];
        }else{
            newList = removalList.filter( card => {
                return card.name !== targetCard.name;
            })
        }
            setRemovalList(newList);
    }
    return (
        <div className='deck flex-container-row'>
            <DeckContainer removeMode={removeMode} handleClick={handleRemoveClick}/>
            <div className='flex-container-col deck-header'>
                <h4>{commander && commander.name}</h4>
                {<img src={commander && commander.image} alt = 'Commander 'style={{width: '65%'}}/>}
                <span>
                    {removeMode ? removeButtons : defaultButtons}
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    commander: state.deck.commander,
    deckList: state.deck.deckList,
    deck: state.deck,
    did: state.decks.current
})
export default connect(mapStateToProps,{getDeck, removeFromDeck, editDeck})(Deck)
