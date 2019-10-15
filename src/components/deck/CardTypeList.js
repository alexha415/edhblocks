import React from 'react'
import {connect} from 'react-redux';
import {removeFromDeck} from '../../actions/deckActions';
const CardTypeList = ({list, category, removeFromDeck}) => {
    return (
        <div style={{margin: '2rem'}}>
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return(
                    <li key={card.name}>
                        <a href="#/" onClick={() => {
                            removeFromDeck(card)
                        }}>{card.name}</a>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default connect( null, {removeFromDeck})(CardTypeList)
