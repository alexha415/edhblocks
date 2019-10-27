import React, {useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {loadUser} from '../../actions/authActions';
import {connect} from 'react-redux';

const PrivateRoute = ({auth: {isAuthenticated, loading}, loadUser, component: Component, ...rest}) => {
  
  useEffect( () => {
    loadUser();
  },[])
  return (
    <Route {...rest} render={(props) => {
      return !isAuthenticated && !loading ? 
      <Redirect to='/login'/> :
      <Component {...props}/>
    }}>
      
    </Route>
  )
}

export default connect( state => ({
  auth: state.auth
}),{loadUser})(PrivateRoute)
