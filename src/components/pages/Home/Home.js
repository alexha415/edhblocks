import React, {useEffect} from 'react'
import SearchCommander from '../../layout/commander/SearchCommander';
import CommanderList from '../../layout/commander/CommanderList';
import {loadUser} from '../../../actions/authActions';
import {connect} from 'react-redux';

import './home.css';

const Home = ({loadUser}) => {
  useEffect( () => {
    if(localStorage.getItem('token')){
      loadUser();
    }
  },[]);
  
  return (
    <div className="home flex-container-col">
      <h4>Search For A Commander</h4>
      <SearchCommander/>
      <CommanderList/>
    </div>
  )
}

export default connect(null,{loadUser})(Home)
