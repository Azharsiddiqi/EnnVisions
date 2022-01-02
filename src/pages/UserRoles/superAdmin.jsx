import React from 'react';
import {Form} from 'react-bootstrap';
import {PRIVATE_ROUTES} from '../../config';
import {useHistory} from 'react-router-dom';

export default () => {
  const history = useHistory();
  return (
    <div>
      <div
        className="add-edit-role dash-body create_main_categories"
        style={{width: '95%', marginLeft: '25px'}}>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label>Admin Name</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Xpeats">XP Eats</option>
              </select>
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group " style={{marginLeft: '50px'}}>
              <label>Role Name</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="fleets">Fleets</option>
              </select>
            </div>
          </div>
          <div className="row">
            <h1 className="add-edit-permission" style={{marginTop: '0px'}}>
              ROLE PERMISSIONS
            </h1>
            <div className="col-12" style={{marginTop: '-0px'}}>
              <h1 className="add-edit-permission" style={{marginTop: '-10px'}}>
                ADMIN
              </h1>

              <div className="row" style={{marginTop: '-20px'}}>
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

            <div className="col-12" style={{marginTop: '-10px'}}>
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

            <div className="col-12" style={{marginTop: '-10px'}}>
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

            <div className="col-md-11  text-right  add-document-btn">
              <button
                type="button"
                className="submit-btn"
                onClick={() => {
                  history.push(PRIVATE_ROUTES.userRoles.adminManagePer.path);
                }}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
