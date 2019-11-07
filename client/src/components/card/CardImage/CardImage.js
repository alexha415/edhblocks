import React from 'react'
import styles from './CardImage.module.scss';

const CardImage = ({uri, name, size}) => {
  if(!size) size = 'md';
  return (
    <div>
      <img src={uri} alt={name} className={`${styles['card-' + size]}`}/>
    </div>
  )
}

export default CardImage
