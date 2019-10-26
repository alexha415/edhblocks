import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import {logoutUser} from '../../../actions/authActions';

const Header = ({logoutUser, auth: {isAuthenticated}}) => {

  const privateNavigation = (
    <Fragment>
      <li className="nav-bar-item">
        < Link to="/decks" className="nav-bar-link">Decks</Link>
      </li>
      <li className="nav-bar-item">
        <Link to="/" className="nav-bar-link" onClick={logoutUser}>Logout</Link>
      </li>
    </Fragment>
    
  )
  const publicNavigation = (
    <li className="nav-bar-item">
      <Link to="/login" className="nav-bar-link">Login</Link>
    </li>
  )
  return (
    <div className="flex-container-row header">
      <ul className='nav-bar'>
        <li className="nav-bar-item">
          <Link to="/" className="nav-bar-link">Home</Link>
        </li>
        {isAuthenticated ? privateNavigation : publicNavigation}
      </ul>
    </div>
  )
}

export default connect(state => ({
  auth: state.auth
}), {logoutUser})(Header)
