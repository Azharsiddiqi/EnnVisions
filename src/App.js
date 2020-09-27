import React, { Component } from 'react';

// Router Import
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';
import * as actions from './store/actions/index';

import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Custom index for all pages
import Index from "./pages/index";

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
      <React.Fragment>
        <PrivateRoute  
					exact 
					path={"/dashboard"} 
					component={Index}
				/>

{/* Open Routes */}
          <Route 
            exact
            path={'/login'}
            component={Index} />

          <Route 
            exact
            path={'/forgot-password'}
            component={Index} />

          <Route 
            exact
            path={'/reset-password'}
            component={Index} />

          <Route 
            exact
            path={'/signup'}
            component={Index} />

        </React.Fragment>
    );
    return routes;
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};


export default withRouter(connect(null,mapDispatchToProps)(App));