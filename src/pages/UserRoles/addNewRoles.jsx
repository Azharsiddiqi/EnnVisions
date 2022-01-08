import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

export default () => {
  const history = useHistory();
  return (
    <div className="d-flex">
      {/* begin::Container */}
      <div className=" container ">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="add-edit-role dash-body">
          <div className="row">
            <div className="col-md-2">
              <img src="assets/images/035-boy-15.svg" alt="" />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="ROLE NAME"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="DISPLAY NAME"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="COMMISSION"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      placeholder="Role Description"
                      rowSpan={5}
                      className="form-control"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="add-edit-permission">ROLE PERMISSIONS</h1>
            <div className="col-12">
              <h1 className="add-edit-permission">ADMIN</h1>

              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        CREATE NEW
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        VIEW LIST
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        UPDATE
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="3" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        EDIT
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <h1 className="add-edit-permission">FLEET</h1>

              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        CREATE NEW
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        VIEW LIST
                      </label>
                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        UPDATE
                      </label>
                      <div className="form-check form-switch">
                        <Form.Switch id="7" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        EDIT
                      </label>

                      <div className="form-check form-switch">
                        <Form.Check type="switch" label="" id="custom-switch" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-11  text-right  add-document-btn">
              <button
                onClick={() =>
                  history.push(
                    PRIVATE_ROUTES.userRoles.createRegistrationForm.path,
                  )
                }
                type="button"
                className="submit-btn"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
