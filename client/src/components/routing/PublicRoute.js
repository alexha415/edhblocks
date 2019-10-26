import React,{useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {loadUser} from '../../actions/authActions';
import {connect} from 'react-redux';

const PublicRoute = ({auth: {isAuthenticated}, component: Component, loadUser, ...rest}) => {

  useEffect( () => {
    if(localStorage.getItem('token')){
      loadUser();
    }
  },[]);

  return (
    <Route {...rest} render={(props) => {
      return !isAuthenticated ?
      <Component {...props}/>
      :<Redirect to='/'/>
    }}>
    </Route>
  )
}

export default connect( state => ({
  auth: state.auth
}),{loadUser} )(PublicRoute)