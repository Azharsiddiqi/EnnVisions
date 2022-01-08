import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../config';

import Login from './Login/login.jsx';
import ForgetPasswordEmail from './ForgetPasswordEmail/forgetPasswordEmail.jsx';
import ResetPassword from './ResetPassword/resetPassword.jsx';
import RegisterVendor from './RegisterVendor/registerVendor.jsx';
import ConfirmationMessage from './RegisterVendor/components/confirmationMessage.jsx';

export default () => {
  const [routes] = useState([
    { path: PUBLIC_ROUTES.login.path, component: Login },
    {
      path: PUBLIC_ROUTES.forgotPasswordEmail.path,
      component: ForgetPasswordEmail,
    },
    { path: PUBLIC_ROUTES.resetPassword.path, component: ResetPassword },
    { path: PUBLIC_ROUTES.registerVendor.path, component: RegisterVendor },
    {
      path: PUBLIC_ROUTES.confirmationPassword.path,
      component: ConfirmationMessage,
    },
  ]);
  return (
    <>
      {routes.map(({ path, component }, index) => (
        <Route exact key={index} path={path} component={component} />
      ))}
    </>
  );
};
