import React, { Component } from 'react';

// Router Import
import {Route,  Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';
import * as actions from './store/actions/index';

import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Custom pages import
import Login from "./containers/Login/login";
import Homepage from './containers/HomePage/index';


class App extends Component {
 
  render() {

    if (localStorage.jwtToken) {
      // console.log("Into localStorage.jwtToken");
      
      setAuthToken(localStorage.jwtToken);
	  const decoded = jwt_decode(localStorage.jwtToken);
	  console.log("decode:", decoded);
      this.props.setCurrentUser(decoded);
      // console.log("loginCheck: ", loginCheck);
      const currentTime = Date.now()/1000;
  
      if (decoded.exp < currentTime) {
          this.props.logoutUser();
          window.location.href = '/login';
      }

  }
    let routes = (
      <div>
        <PrivateRoute  
					exact 
					path={"/dashboard"} 
					component={Homepage}
				/>

{/* Open Routes */}
          <Route 
            exact
            path={'/login'}
            component={Login} />

            <Redirect to="/login" />
        </div>
    );
    return (
      <div className="app">
            {routes}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};


export default withRouter(connect(null,mapDispatchToProps)(App));