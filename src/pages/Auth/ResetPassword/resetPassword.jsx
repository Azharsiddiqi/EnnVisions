import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../config';

export default () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        {/* begin::Content body */}
        <div className="d-flex flex-column-fluid flex-center">
          {/* begin::Signin */}
          <div className="login-form login-signin">
            {/* begin::Form */}
            <img
              src="assets/images/ic-logo.svg"
              alt="logo"
              className="envision-red-logo"
            />
            <form
              className="form"
              noValidate="novalidate"
              id="kt_login_signin_form"
            >
              {/* begin::Title */}
              <div className="pb-3 pt-lg-0 pt-5">
                <h3 className="welcome-title">RESET PASSWORD</h3>
              </div>
              {/* begin::Title */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg"
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                />
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg"
                  type="password"
                  name="confirmPassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
                <div className="d-flex justify-content-between mt-n5"></div>
              </div>
              {/* end::Form group */}
              {/* begin::Action */}
              <div className="pb-lg-0 pb-5">
                <button
                  onClick={() => history.push(PUBLIC_ROUTES.login.path)}
                  type="button"
                  className="btn btn-primary next-btn font-weight-bolder font-size-h6 px-4 py-4 my-3 mr-3"
                >
                  SIGN IN
                </button>
              </div>
              {/* end::Action */}
            </form>
            {/* end::Form */}
          </div>
        </div>
        {/* end::Content body */}
        {/* begin::Content footer */}
        <div className="footer-links d-flex justify-content-center align-items-end py-7 py-lg-0">
          <Link
            className="gilroy-medium text-primary font-weight-bolder font-size-h5"
            to="#"
          >
            TERMS
          </Link>
          <Link
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
            to="#"
          >
            PLANS
          </Link>
          <Link
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
            to="#"
          >
            CONTACT US
          </Link>
        </div>
        {/* end::Content footer */}
      </div>
    </React.Fragment>
  );
};
