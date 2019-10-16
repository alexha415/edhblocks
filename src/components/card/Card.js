import React, {useEffect, useState} from 'react'
import {clearSearch} from '../../actions/searchActions';
import {addCard} from '../../actions/cartActions';
import {addCommander} from '../../actions/deckActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Card = ({card, addCard, addCommander, commander, clearSearch, history}) => {

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
    e.preventDefault()
    const newCard = {
      name,
      id,
      image,
      cmc,
      colorId: parseColorId(),
      cardType: setCategory(),
    }
    if(commander){
      addCommander(newCard);
      clearSearch();
      history.push('/deck')
    }else{
      addCard(newCard);
    }
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
    <div className='card'>
      <a href="#/" onClick={onClick}>
        <img className='card-img' src={image} alt="Card Loading..."/>
      </a>
    </div>
  )
}

export default connect(null,{addCard,addCommander,clearSearch})(withRouter(Card))
