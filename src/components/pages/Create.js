import React from 'react'
import CardList from '../card/CardList';
import Searchbar from'../layout/header/Searchbar';
import DeckList from '../deck/DeckList';
const Create = () => {
  return (
    <div className='flex-container-row create'>
      <div className="flex-container-col search-container">
        <h4 className='create-title'>Create Deck</h4>
        <Searchbar/>
      <CardList/>
      </div>
      <DeckList/>
    </div>
  )
}

export default Create
