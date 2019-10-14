import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex-container-row header">
      <ul className='nav-bar'>
        <li className="nav-bar-item">
          <Link to="/" className="nav-bar-link">Home</Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/deck" className="nav-bar-link">Deck</Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/create" className="nav-bar-link">Create</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
