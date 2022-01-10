import { PUBLIC_ROUTES } from '../../config';

import Login from './Login/login.jsx';
import ForgetPasswordEmail from './ForgetPasswordEmail/forgetPasswordEmail.jsx';
import ResetPassword from './ResetPassword/resetPassword.jsx';
import RegisterVendor from './RegisterVendor/registerVendor.jsx';
import ConfirmationMessage from './RegisterVendor/components/confirmationMessage.jsx';

export const AuthRoutesComponent = [
  { path: PUBLIC_ROUTES.login.path, Component: Login },
  {
    path: PUBLIC_ROUTES.forgotPasswordEmail.path,
    Component: ForgetPasswordEmail,
  },
  { path: PUBLIC_ROUTES.resetPassword.path, Component: ResetPassword },
  { path: PUBLIC_ROUTES.registerVendor.path, Component: RegisterVendor },
  {
    path: PUBLIC_ROUTES.confirmationPassword.path,
    Component: ConfirmationMessage,
  },
];