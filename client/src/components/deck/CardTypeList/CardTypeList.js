import React from 'react'
import Card from '../Card/Card';
import './cardTypeList.css';
const CardTypeList = ({removeMode, handleClick, list, category}) => {
    return (
        <div className="category-container">
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return <Card key = {card.name} removeMode={removeMode} handleClick={handleClick} card={card}/>
                })}
            </ul>
        </div>
    )
}

export default CardTypeList
