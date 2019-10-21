import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
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
          <Link to="/login" className="nav-bar-link">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
