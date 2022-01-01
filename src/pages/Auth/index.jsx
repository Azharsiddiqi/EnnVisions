import React from 'react';
import Routes from './routes.jsx';

import Aside from './components/Aside.jsx';

export default () => {
  return (
    <React.Fragment>
      {/* begin::Main */}
      <div className="d-flex flex-column flex-root">
        {/* begin::Login */}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/* begin::Aside */}
          <Aside />
          {/* begin::Aside */}
          {/* begin::Content */}
          <Routes />
          {/* end::Content */}
        </div>
        {/* end::Login */}
      </div>
      {/* end::Main */}
    </React.Fragment>
  );
};
