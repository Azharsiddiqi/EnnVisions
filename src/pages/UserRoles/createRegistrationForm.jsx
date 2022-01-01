import React from 'react';
import {useHistory} from 'react-router-dom';
import {PRIVATE_ROUTES} from '../../config';

export default () => {
  const history = useHistory();
  return (
    <div className="d-flex flex-column-fluid">
      {/* begin::Container */}
      <div className="container">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="row">
          <div className="dash-body create-registration-form">
            <div className="row">
              <div className="col-md-6 col-lg-5 create-registration-container">
                <div className="create-registration-content">
                  <h3 className="create-t">
                    WANT TO BE A ENNVISIONS <u>ADD ROLE NAME</u>
                  </h3>
                  <p className="leave-shortly">
                    Leave your restaurant details here and we will be in touch shortly.
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="add placeholder"
                      placeholder="add placeholder"
                      className="form-control add-placeholder"
                    />
                  </div>
                  <div className="btn-fleet-submit">
                    <button
                      onClick={() => history.push(PRIVATE_ROUTES.dashboard.path)}
                      type="submit"
                      className="btn"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="container create-admin-container">
                  <div className="create-admin-form">
                    <form action="#" method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="add placeholder"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Add title</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>add placeholder 1</option>
                          <option>add placeholder 2</option>
                          <option>add placeholder 3</option>
                          <option>add placeholder 4</option>
                          <option>add placeholder 5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          defaultValue="Enter Email Address"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="file"
                          className="form-control upload"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Insurance (Photo)"
                        />
                        <div className="fakefile">
                          <span className="placeholder">
                            add placeholder <span className="light">(Photo)</span>
                          </span>
                          <input />
                          <img src="assets/images/ic_upload.svg" alt="" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Insurance Expiry Date"
                          defaultValue="add placeholder"
                        />
                        <img src="assets/images/ic_calendar.svg" className="calendar-icon" alt="" />
                      </div>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
