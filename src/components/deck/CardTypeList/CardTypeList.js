import React from 'react'
import ListCardItem from '../listcarditem/ListCardItem';
import './cardTypeList.css';
const CardTypeList = ({removeMode, handleClick, list, category}) => {
    return (
        <div className="category-container">
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return <ListCardItem key = {card.name} removeMode={removeMode} handleClick={handleClick} card={card}/>
                })}
            </ul>
        </div>
    )
}

export default CardTypeList
