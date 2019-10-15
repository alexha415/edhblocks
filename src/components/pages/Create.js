import React from 'react'
import SearchList from '../card/SearchList';
import Searchbar from'../layout/header/Searchbar';
import CartList from '../cart/CartList';
const Create = () => {
  
  return (
    <div className='flex-container-row create'>
      <div className="flex-container-col search-container">
        <h4 className='create-title'>Search Cards</h4>
        <Searchbar/>
      <SearchList/>
      </div>
      <CartList/>
    </div>
  )
}

export default Create
