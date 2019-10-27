import React,{useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {loadUser} from '../../actions/authActions';
import {connect} from 'react-redux';

const PublicRoute = ({auth: {isAuthenticated, loading}, component: Component, loadUser, ...rest}) => {

  useEffect( () => {
      loadUser();
  },[]);

  return (
    <Route {...rest} render={(props) => {
      return isAuthenticated && !loading ?
       <Redirect to='/'/> : <Component {...props}/>
    }}>
    </Route>
  )
}

export default connect( state => ({
  auth: state.auth
}),{loadUser} )(PublicRoute)