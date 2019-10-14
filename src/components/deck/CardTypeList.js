import React from 'react'

const CardTypeList = ({list, category}) => {
    return (
        <div>
            <h4>{category}: {list ? list.length : '0'}</h4>
            <ul>
                {list && list.map( card => {
                    return <li>{card.name}</li>
                })}
            </ul>
        </div>
    )
}

export default CardTypeList
