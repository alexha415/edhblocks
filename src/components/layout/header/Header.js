import React from 'react'
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';
const Header = () => {
  return (
    <div className="header">
      <div className='search-bar'>
        <Searchbar className='search-bar'/>
      </div>
      <ul className='nav-bar'>
        <li className="nav-bar-item">
          <Link to="/" className="nav-bar-link">Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
