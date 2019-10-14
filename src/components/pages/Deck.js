import React from 'react'
import {connect} from 'react-redux'
import CardTypeList from '../deck/CardTypeList';

const Deck = ({deck: {commander, deckList, categories}}) => {
    return (
        <div className='flex-container-col'>
            <div className='flex-container-col' style ={{alignItems:'center'}}>
            <h4>{commander && commander.name}</h4>
            {commander && <img src={commander.image} style={{width: '20%'}}/>}
            </div>
            <div className="flex-container-row">
                {categories && categories.map(category => { 
                    let cardList = deckList.filter(card => {
                        return card.cardType === category
                    })
                    console.log(cardList);
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
