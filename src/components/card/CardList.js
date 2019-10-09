import React, {useEffect, useState} from 'react'
import Card from './Card';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const search_root = 'https://api.scryfall.com/cards/search';
  
  useEffect( () => {
    fetchCards();
  }, [])

  const fetchCards = async () => { 
    try {
      const res = await fetch(`${search_root}?q=gingerbrute`);
      const data = await res.json();
      setCards(data.data);
    } catch (error) {
      console.log(error);
    }
   }

  return (
  <div className='container'>
    {cards.map(card => {
      return <Card key={card.id} card={card}/>
    })}
  </div>
  )
}

export default CardList
