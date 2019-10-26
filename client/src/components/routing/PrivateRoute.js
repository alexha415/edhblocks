import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({auth: {isAuthenticated, loading}, component: Component, ...rest}) => {
 
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
}))(PrivateRoute)
