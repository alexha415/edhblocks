import React from 'react'

const CardImage = ({uri, name, size}) => {
  return (
    <div>
      <img src={uri} alt={name} className={`${styles['card-' + size]}`}/>
    </div>
  )
}

export default CardImage
