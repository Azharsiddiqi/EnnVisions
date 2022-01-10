import React from 'react';

// Router Import
import { Route, Routes, Navigate } from 'react-router-dom';
// Custom index for all pages
import Index from './pages/index.jsx';
import AuthIndex from './pages/Auth/index.jsx';
import { privateRoutes } from './routes';
import { PUBLIC_ROUTES } from './config';

import { AuthRoutes } from './pages/Auth/routes';

const App = () => {
  return (
    <Routes>
      {/* Start: public routes */}
      <Route path="/auth" element={<AuthIndex />}>
        {AuthRoutes.map(({ path, Component }, index) =>
          <Route key={index} path={path} element={<Component />} />
        )}
      </Route>
      {/* End: public routes */}

      {/* Start: private routes */}
      <Route path="/" element={<Index menu={data.menu} subMenu={data.subMenu} />}>
        {privateRoutes.map((data, index) => (
          <Route
            key={index}
            path={data.path}
            element={<Index menu={data.menu} subMenu={data.subMenu} />}
          />
        ))}
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
