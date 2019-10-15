import React from 'react'
import {connect} from 'react-redux'
import CardTypeList from '../deck/CardTypeList';
import {Link} from 'react-router-dom';

const Deck = ({deck: {commander, deckList, categories}}) => {
    return (
        <div className='flex-container-col'>
            <div className='flex-container-col deck-header' style ={{alignItems:'flex-end', marginRight: '2rem'}}>
                <Link to='/create' className='edit-deck-btn'>Edit Deck</Link>
                <h4>{commander && commander.name}</h4>
                {<img src={commander && commander.image} alt = 'Commander 'style={{minWidth: '20%', width: '20%', minHeight: '200px'}}/>}
            </div>
            <div className="flex-container-row">
                {categories && categories.map(category => { 
                    let cardList = deckList.filter(card => {
                        return card.cardType === category
                    })
                return <CardTypeList key = {category} category={category} list={cardList}/>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    deck: state.deck
})
export default connect(mapStateToProps)(Deck)
