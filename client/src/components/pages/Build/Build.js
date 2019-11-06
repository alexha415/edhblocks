import React, {useEffect} from 'react'
import SearchCommander from '../../layout/commander/SearchCommander';
import CommanderList from '../../layout/commander/CommanderList';
import {loadUser} from '../../../actions/authActions';
import {connect} from 'react-redux';

import './Build.css';

const Build = ({loadUser}) => {
  useEffect( () => {
    if(localStorage.getItem('token')){
      loadUser();
    }
    //eslint-disable-next-line
  },[]);
  
  return (
    <div className="build flex-col">
      <SearchCommander/>
      <CommanderList/>
    </div>
  )
}

export default connect(null,{loadUser})(Build)
