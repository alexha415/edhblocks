import React, {useEffect, useState} from 'react'
import {addCard} from '../../actions/deckActions';
import {connect} from 'react-redux';

const Card = ({ card, addCard }) => {
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
  
  const onClick = (e) => {
    e.preventDefault()
    addCard({
      name,
      image
    });
  }
  return (
    <div className='card'>
      <a href="#" onClick={onClick}>
        <img className='card-img' src={image} alt="Card Loading..."/>
      </a>
    </div>
  )
}

export default connect(null,{addCard})(Card)
