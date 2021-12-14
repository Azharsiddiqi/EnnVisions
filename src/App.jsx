import React from 'react'

// Router Import
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
// Custom index for all pages
import Index from './pages/index.jsx'
import AuthIndex from './pages/Auth/index.jsx'
import { authRoutes, privateRoutes } from './routes'
import { PUBLIC_ROUTES } from './config'

const App = () => {
  return (
    <Switch>
      {/* Start: public routes */}
      {authRoutes.map((path, index) => (
        <Route exact key={index} path={path} component={AuthIndex} />
      ))}
      {/* End: public routes */}

      {/* Start: private routes */}
      {privateRoutes.map((data, index) => (
        <Route
          exact
          key={index}
          path={data.path}
          component={() => <Index menu={data.menu} subMenu={data.subMenu} />}
        />
      ))}
      {/* End: private routes */}
      <Redirect to={PUBLIC_ROUTES.login.path} />
    </Switch>
  )
}

export default withRouter(App)
