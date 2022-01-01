import React from 'react';
import {Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {PRIVATE_ROUTES} from '../../config';

export default () => {
  const history = useHistory();
  return (
    <div>
      {/*begin::Entry*/}
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="add-edit-role dash-body create_main_categories vehicle-type-container ad-cancel-reason">
            <div className="row">
              <div className="col-md-5">
                <div className="vehicle-info">
                  <div className="form-group">
                    <input type="text" name="Title" className="form-control" placeholder="Title" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Details" rows="6" />
                  </div>

                  <div className=" form-group">
                    <div className="row">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg">
                            <input type="checkbox" name="Checkboxes3_1" />
                            <span />
                            CREATE NEW
                            <br />
                          </label>
                          <div className="form-check form-switch">
                            <Form.Check type="switch" label="" id="12" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group" style={{marginLeft: '50px'}}>
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg">
                            <input type="checkbox" name="Checkboxes3_1" />
                            <span />
                            VIEW LIST
                          </label>
                          <div className="form-check form-switch">
                            <Form.Check type="switch" label="" id="21" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg">
                            <input type="checkbox" name="Checkboxes3_1" />
                            <span />
                            UPDATE
                          </label>
                          <div className="form-check form-switch">
                            <Form.Check type="switch" label="" id="41" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group " style={{marginLeft: '80px'}}>
                        <div className="checkbox-inline ">
                          <label className="checkbox checkbox-lg ">
                            <input type="checkbox" name="Checkboxes3_1" />
                            <span />
                            EDIT
                          </label>
                          <div className="form-check form-switch">
                            <Form.Check type="switch" label="" id="61" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Stats</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option value="PUNJAB">PUNJAB</option>
                      <option value="SINDH">SINDH</option>
                      <option value="KPK">KPK</option>
                    </select>
                  </div>

                  <div className="add-document-btn mt-5">
                    <button
                      type="button"
                      className="submit-btn"
                      onClick={() => {
                        history.push(PRIVATE_ROUTES.userRoles.superAdmin.path);
                      }}>
                      SUBMIT
                    </button>
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
