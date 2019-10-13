import React, {useEffect, useState} from 'react'
import {addCard, addCommander} from '../../actions/deckActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Card = ({card, addCard, addCommander, commander, history}) => {

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
      setColorId(card.colorId);
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
    const card = {
      name,
      id,
      image,
      cmc,
      colorId
    }
    if(commander){
      addCommander(card);
      history.push('/create')
    }
      addCard(card);
  }
  return (
    <div className='card'>
      <a href="#/" onClick={onClick}>
        <img className='card-img' src={image} alt="Card Loading..."/>
      </a>
    </div>
  )
}

export default connect(null,{addCard,addCommander})(withRouter(Card))
