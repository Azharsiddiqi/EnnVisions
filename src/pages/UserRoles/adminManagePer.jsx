import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const adminManagePer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="add-edit-role dash-body create_main_categories"
        style={{ width: '95%', marginLeft: '25px' }}
      >
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
            <div className="form-group " style={{ marginLeft: '50px' }}>
              <label>Role Name</label>
              <textarea
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder="Fleets"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <h1 className="add-edit-permission" style={{ marginTop: '0px' }}>
              ROLE PERMISSIONS
            </h1>
            <div className="col-12" style={{ marginTop: '-0px' }}>
              <h1
                className="add-edit-permission"
                style={{ marginTop: '-10px' }}
              >
                ADMIN
              </h1>

              <div className="row" style={{ marginTop: '-20px' }}>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        CREATE NEW
                      </label>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ marginTop: '-10px' }}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ marginTop: '-10px' }}>
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
                  navigate(PRIVATE_ROUTES.dashboard.path);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminManagePer;