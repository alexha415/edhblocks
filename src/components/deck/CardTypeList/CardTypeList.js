import React from 'react'
import ListCardItem from '../listcarditem/ListCardItem';

const CardTypeList = ({list, category}) => {
    return (
        <div>
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return <ListCardItem card={card}/>
                })}
            </ul>   
        </div>
    )
}

export default CardTypeList
