import React from 'react'
import CardList from '../card/CardList';
import Searchbar from'../layout/header/Searchbar';

const Create = () => {
  return (
    <div className="flex-container-col create">
    <h4 className='create-title'>Create Deck</h4>
      <div className='search-bar'>
        <Searchbar className='search-bar'/>
      </div>
      <CardList/>
    </div>
  )
}

export default Create
