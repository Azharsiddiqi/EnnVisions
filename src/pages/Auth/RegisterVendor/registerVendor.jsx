import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../config';
import AddMoreOptions from './components/addMoreInfo';

export default () => {
  const [showAddMoreOptions, setShowAddMoreOptions] = useState(false);
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
              <div className="pb-7 pt-lg-0 pt-5">
                <h3 className="signup-title">
                  WANT TO BE A EnnVisions MERCHANT? (CANADA)
                </h3>
                <p className="gilroy-regular signup-leave-text">
                  Leave your restaurant details here and we will be in touch
                  shortly.
                </p>
              </div>
              {/* end::Title */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Location Name"
                  name="fullname"
                  autoComplete="off"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                      type="text"
                      placeholder="First Name"
                      name="fullname"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                      type="text"
                      placeholder="Last Name"
                      name="fullname"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group country-numbers">
                    <input
                      className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                      type="text"
                      placeholder="(617) 397 - 8483"
                      name="fullname"
                      autoComplete="off"
                    />
                    <span className="country-code">
                      <img src="assets/images/053-canada.svg" alt="" /> +1
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group country-numbers">
                    <input
                      className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                      type="text"
                      placeholder="(617) 397 - 8483"
                      name="fullname"
                      autoComplete="off"
                    />
                    <span className="country-code">
                      <img src="assets/images/053-canada.svg" alt="" /> +1
                    </span>
                  </div>
                </div>
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Official Email"
                  name="email"
                  autoComplete="off"
                />
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Address"
                  name="address"
                  autoComplete="off"
                />
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-country">State</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Ontario</option>
                      <option>Ontario</option>
                      <option>Ontario</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="label-country">City</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Toronto</option>
                      <option>Ontario</option>
                      <option>Ontario</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Facebook Page / Company Website"
                  name="address"
                  autoComplete="off"
                />
              </div>
              <div className="r-u-owner">
                ARE YOU THE OWNER OR MANAGER OF THIS PLACE?*
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="owner" />
                        <span />
                        I'm not the owner/manager
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="owner" />
                        <span />
                        I'm the owner/manager
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <label className="label-country">Business Category</label>
              <div className="form-group country-names">
                <select className="form-control">
                  <option>Food * Pharma</option>
                  <option>Sole</option>
                  <option>Sole</option>
                </select>
              </div>
              <label className="label-country">Business Type</label>
              <div className="form-group country-names">
                <select className="form-control">
                  <option>Sole Proprietorship</option>
                  <option>Sole</option>
                  <option>Sole</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Company Name (SSM)"
                  name="address"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Company Registration Number (SSM)"
                  name="address"
                  autoComplete="off"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="label-country">Number of Outlets</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>2 (TWO)</option>
                      <option>3 (THREE)</option>
                      <option>4 (FOUR)</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="label-country">
                    House delivery services?
                  </label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
              <label className="label-country">OPENING STATUS</label>
              <div className="form-group country-names">
                <select className="form-control">
                  <option>This place is already open</option>
                  <option>This place is already open</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  onClick={() => setShowAddMoreOptions(!showAddMoreOptions)}
                  id="add-more-btn"
                  className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4"
                >
                  + Add more info (optional)
                </button>
              </div>
              {showAddMoreOptions ? <AddMoreOptions /> : ''}
              <div className="form-group">
                <button
                  type="button"
                  onClick={() =>
                    history.push(PUBLIC_ROUTES.confirmationPassword.path)
                  }
                  id="sign-submit-btn"
                  className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 mr-4"
                >
                  SUBMIT
                </button>
              </div>
              {/* end::Action */}
            </form>
            <div className="privacy-text">
              By proceeding, I agree that you can collect, use and disclose the
              information provided by me in accordance with your{' '}
              <Link to="#">Privacy Policy</Link> which I have read and
              understand
            </div>
            {/* end::Form */}
          </div>
          {/* end::Signin */}
        </div>
        {/* end::Content body */}
        {/* begin::Content footer */}
        {/* end::Content footer */}
        <div className="footer-links d-flex justify-content-center align-items-end py-7 py-lg-0">
          <Link
            to="#"
            className="gilroy-medium text-primary font-weight-bolder font-size-h5"
          >
            TERMS
          </Link>
          <Link
            to="#"
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
          >
            PLANS
          </Link>
          <Link
            to="#"
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
