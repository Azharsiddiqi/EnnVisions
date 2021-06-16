import React, {useState} from 'react'

// Router Import
import {Route, withRouter} from 'react-router-dom';

//Custom index for all pages
import Index from "./pages/index.jsx";
import AuthIndex from './pages/Auth/index.jsx';

const App = () => {
  const [authRoutes] = useState([
    "/login",
    "/forgot-password-email",
    "/reset-password",
    "/register-vendor",
    "/confirmation-massage"
  ]);
  const [privateRoutes] = useState([
    "/",
    "/dashboard",
    "/add-role",
    "/edit-role",
    "/create-admin",
    "/user-role",
    "/create-vendor",
    "/create-dispatcher",
    "/helper",
    "/new-driver",
    "/admin-info",
    "/dispatcher-info",
    "/vender-list",
    "/view-vendor",
    "/page-38",
    "/page-26",
    "/page-13",
    "/page-6",
    "/page-8",
    "/page-12",
    "/page-14",
    "/page-15",
    "/page-18",
    "/page-20",
    "/page-23",
    "/page-33",
    "/page-35",
  ]);
  return (
    <React.Fragment>
      {/* Start: public routes */}
      {authRoutes.map((path, index) => <Route  
        exact 
        key={index}
        path={path} 
        component={AuthIndex}
      />)}
      {/* End: public routes */}

      {/* Start: private routes */}
      {privateRoutes.map((path, index) => <Route  
        exact 
        key={index}
        path={path} 
        component={Index}
      />)}
      {/* End: private routes */}
    </React.Fragment>
  )
}


export default withRouter(App);