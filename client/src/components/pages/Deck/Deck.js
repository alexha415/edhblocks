import React, {Fragment, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import DeckContainer from '../../deck/deckContainer/DeckContainer';
import {getDeck, removeFromDeck} from '../../../actions/deckActions';
import {editDeck} from '../../../actions/decksActions';
import './deck.css';


const Deck = ({deck: {commander, _id},getDeck, removeFromDeck, match}) => {
    useEffect( () => {
        if(!_id && _id !== match.params.id){
            getDeck(match.params.id);
        }
    },[]);
    const toggleRemoveMode = (e) => {
        e.preventDefault();
        setRemoveMode(!removeMode);
    }
    const onRemove = (e) => {
        e.preventDefault();
        removeFromDeck(removalList);
        setRemoveMode(false);
    }
    const defaultButtons = 
    <Fragment>
        <Link to={`/edit/${_id}`} className="edit-deck-btn primary">Add Cards</Link>
        <Link to='#' className="edit-deck-btn primary" onClick={toggleRemoveMode}>Remove Cards</Link>
    </Fragment>

    const removeButtons = 
    <Fragment>
        <Link to='#' className="edit-deck-btn primary" onClick={onRemove}>Confirm</Link>
        <Link to='#' className="edit-deck-btn primary" onClick={toggleRemoveMode}>Cancel</Link>
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
                {<img src={commander && commander.image} alt = 'Commander'/>}
                <span>
                    {removeMode ? removeButtons : defaultButtons}
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    deck: state.deck,
})
export default connect(mapStateToProps,{getDeck, removeFromDeck, editDeck})(withRouter(Deck))
