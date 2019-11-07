import React, {useEffect, useState} from 'react'
import CardImage from './CardImage/CardImage';

import './card.scss';

const Card = ({card, addCard, handleClick}) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [cmc, setCmc] = useState('');
  const [id, setId] = useState('');
  const [colorId, setColorId] = useState('');


  useEffect( () => {
    try {
      setName(card.name);
      setCmc(card.cmc);
      setId(card.id);
      setColorId(card.color_identity);
      if(card.layout && card.layout === 'transform'){
        setImage(card.card_faces[0].image_uris.normal);
      }else{
        setImage(card.image_uris.normal);
      }
      
    } catch (error) {
      console.error(card);
    }
    //eslint-disable-next-line
  },[])
  const onClick = (e) => {
    e.preventDefault();
    const newCard = {
      name,
      id,
      image,
      cmc,
      colorId: parseColorId(),
      cardType: setCategory(),
    }
    handleClick(newCard);
  }
  const deckClick = (e) => {
    e.preventDefault();
    const newCard = {
      name,
      id,
      image,
      cmc,
      colorId: parseColorId(),
      cardType: setCategory(),
    }
    addCard(newCard);
  }

const setCategory = () => {
  const arr = card.type_line.split(' ');
  if(arr[0] === 'Legendary'){
    return arr[1];
  }else{
    return arr[0];
  }
}

const parseColorId = () => {
  let colors = '';
  colorId.forEach( color => {
    colors += color
  });
  return colors;
}

  return (
    <img src={image} alt={name} className={`card-image` + (handleClick ? ' clickable' : '')} onClick={handleClick ? onClick : null}/>
  )
}

export default Card
