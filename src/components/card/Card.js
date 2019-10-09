import React, {useEffect, useState} from 'react'

const Card = ({ card }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect( () => {
    setName(card.name)
    setImage(card.image_uris.normal);
  },[])
  
  return (
    <div className='card'>
      <p className='card-name'>{name}</p>
      <a href="#">
        <img className='card-img' src={image} alt="Card Loading..."/>
      </a>
    </div>
  )
}

export default Card
