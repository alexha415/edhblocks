import React, {useEffect, useState} from 'react'

const Card = ({ card }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect( () => {
    
    try {
      setName(card.name)
      if(card.card_faces){
        setImage(card.card_faces[0].image_uris.normal);
      }else{
        setImage(card.image_uris.normal);
      }
      
    } catch (error) {
      console.error(card);
    }
  },[])
  
  return (
    <div className='card'>
      <a href="#">
        <img className='card-img' src={image} alt="Card Loading..."/>
      </a>
    </div>
  )
}

export default Card
