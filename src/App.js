import React from 'react';

// Router Import
import { Route, Routes, Navigate } from 'react-router-dom';
// Custom index for all pages
import Index from './pages/index.jsx';
import AuthIndex from './pages/Auth/index.jsx';
import { PUBLIC_ROUTES } from './config';

import { AuthRoutesComponent } from './pages/Auth/routes';
import { PublicRoutesComponent } from './pages/routes';

const App = () => {

  return (
    <Routes>
      <Route path="/auth" element={<AuthIndex />}>
        {AuthRoutesComponent.map(({ path, Component }, index) =>
          <Route key={index} path={path} element={<Component />} />
        )}
      </Route>
      {/* End: public routes */}

      {/* Start: private routes */}
      <Route element={<Index />}>
        {PublicRoutesComponent.map(({ path, Component }, index) =>
          <Route key={index} path={path.replace('/', '')} element={<Component />} />
        )}
      </Route>
      {/* End: private routes */}
      <Route
        path="*"
        element={<Navigate replace to={'/auth/' + PUBLIC_ROUTES.login.path} />}
      />
    </Routes>
  );
};

export default App;
