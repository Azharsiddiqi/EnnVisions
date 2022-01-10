import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import {ACTION_createUserRole} from '../../store/userRoles/actions';

const AddNewRoles = () => {
  
  const dispatch = useDispatch();
  const [roleName, setRoleName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [commission, setCommission] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  // const [status, setStatus] = useState(1);




  const createNewItemHandler = () => {
    console.log('checking i am here');
    if (!roleName || roleName === '') return;
    const reqPacket = {
      name: roleName,
      display:displayName,
      commission:commission,
      description: roleDescription,
      // status: status === 1 ? true : false,
    };
    dispatch(ACTION_createUserRole(reqPacket));
    // resetItem();
  };

  return (
    <div className="d-flex">
      {/* begin::Container */}
      <div className="container">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="add-edit-role dash-body">
          <div className="row">
            <div className="col-md-2">
              <img src="/assets/images/035-boy-15.svg" alt="" />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      d="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="ROLE NAME"
                      value={roleName}
                      onChange={(e)=> setRoleName(e.target.value)}
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
                      value={displayName}
                      onChange={(e)=>setDisplayName(e.target.value)}
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
                      value={commission}
                      onChange={(e)=> setCommission(e.target.value)}
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
                      value={roleDescription}
                      onChange={(e)=> setRoleDescription (e.target.value)}
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
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
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" />
                          <span className="custom-switch-slider custom-switch-round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-11  text-right  add-document-btn">
              <button
                onClick={createNewItemHandler}
                
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

export default AddNewRoles;