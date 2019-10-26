import React from 'react'
import SearchList from '../../card/SearchList';
import Searchbar from'../../layout/header/Searchbar';
import CartList from '../../cart/CartList';
import './editDeck.css';

const EditDeck = () => {
  
  return (
    <div className='flex-container-row cart'>
      <div className="flex-container-col search-container">
        <h4>Search Cards</h4>
        <Searchbar/>
      <SearchList/>
      </div>
      <CartList/>
    </div>
  )
}

export default EditDeck
