import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';



import {ACTION_createUserRole} from '../../store/userRoles/actions';

const AddNewRoles = () => {
  
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState();
  // eslint-disable-next-line no-unused-vars
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const inputFileRef = useRef();

  
  const [roleName, setRoleName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [commission, setCommission] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  
  const [adminCanCreate, setAdminCanCreate] = useState(false);
  const [adminIsCreateRequired, setAdminIsCreateRequired] = useState(false);
  const [adminCanUpdate, setAdminCanUpdate] = useState(false);
  const [adminIsUpdateRequired, setAdminIsUpdateRequired] = useState(false);
  const [adminCanDelete, setAdminCanDelete] = useState(false);
  const [adminIsDeleteRequired, setAdminIsDeleteRequired] = useState(false);
  const [adminCanViewList, setAdminCanViewList] = useState(false);
  const [adminIsViewListRequired, setAdminIsViewListRequired] = useState(false);


  const [fleetCanCreate, setFleetCanCreate] = useState(false);
  const [fleetIsCreateRequired, setFleetIsCreateRequired] = useState(false);
  const [fleetCanUpdate, setFleetCanUpdate] = useState(false);
  const [fleetIsUpdateRequired, setFleetIsUpdateRequired] = useState();
  const [fleetCanDelete, setFleetCanDelete] = useState(false);
  const [fleetIsDeleteRequired, setFleetIsDeleteRequired] = useState(false);
  const [fleetCanViewList, setFleetCanViewList] = useState(false);
  const [fleetIsViewListRequired, setFleetIsViewListRequired] = useState(false);


  const createNewItemHandler = () => {
    console.log('checking i am here');
    if (!roleName || roleName === '') return;
    const adminReqPacket = {
      canCreate: adminCanCreate,
      isCreateRequired: adminIsCreateRequired,
      canUpdate: adminCanUpdate,
      isUpdateRequired: adminIsUpdateRequired,
      canDelete: adminCanDelete,
      isDeleteRequired: adminIsDeleteRequired,
      canViewList: adminCanViewList,
      isViewListRequired: adminIsViewListRequired,
      dtoPermission:{
        id:1
      }
    };
    const fleetReqPacket = {
      canCreate:          fleetCanCreate,
      isCreateRequired:   fleetIsCreateRequired,
      canUpdate:          fleetCanUpdate,
      isUpdateRequired:   fleetIsUpdateRequired,
      canDelete:          fleetCanDelete,
      isDeleteRequired:     fleetIsDeleteRequired,
      canViewList:          fleetCanViewList,
      isViewListRequired: fleetIsViewListRequired,
      dtoPermission:{
        id:2
      }
    };
    const reqPacket = {
      roleName,
      displayName,
      comisssion:commission,
      roleDescription,
      status: true,
      dtoRolePermissionDetails: [
        adminReqPacket, fleetReqPacket
      ]
    };
    console.log('check reqPacket:',reqPacket);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('dtoRole', JSON.stringify(reqPacket));
    dispatch(ACTION_createUserRole(formData));
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const _file = e.target.files[0];
    reader.onloadend = () => {
      setFile(_file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(_file);
  };



  

  return (
    <div className="d-flex">
      {/* begin::Container */}
      <div className="container">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="add-edit-role dash-body">
          <div className="row">
            <div className="col-md-2 cursor-class" 
              style={
                {
                  backgroundImage: `url(${imagePreviewUrl || '/assets/images/035-boy-15.svg'})`, 
                  backgroundSize: 'cover'
                }}
              onClick={() => inputFileRef.current.click()}
            >
              <input style={{display: 'none'}} ref={inputFileRef} type="file"  onChange={photoUpload} />
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
                        <input type="checkbox" name="Checkboxes3_1"
                          checked={adminCanCreate}
                          onChange={(e) => setAdminCanCreate(e.target.checked)}
                        />
                        <span />
                        CREATE NEW
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" 
                            checked={adminIsCreateRequired}
                            onChange={(e) => setAdminIsCreateRequired(e.target.checked)}
                          />
                          <span className="custom-switch-slider custom-switch-round"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={adminCanViewList}
                          onChange={(e) => setAdminCanViewList(e.target.checked)}/>
                        <span />
                        VIEW LIST
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" 
                            checked={adminIsViewListRequired}
                            onChange={(e)=>setAdminIsViewListRequired(e.target.checked)}/>
                          <span className="custom-switch-slider custom-switch-round"
                            
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={adminCanUpdate}
                          onChange={(e) => setAdminCanUpdate(e.target.checked)}
                        />
                        <span />
                        UPDATE
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox"checked={adminIsUpdateRequired}
                            onChange={(e)=> setAdminIsUpdateRequired(e.target.checked)} />
                          <span className="custom-switch-slider custom-switch-round"
                            
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={adminCanDelete}
                          onChange={(e) => setAdminCanDelete(e.target.checked)}
                        />
                        <span />
                        EDIT
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" checked={adminIsDeleteRequired}
                            onChange={(e)=> setAdminIsDeleteRequired(e.target.checked)}/>
                          <span className="custom-switch-slider custom-switch-round"
                            
                          ></span>
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
                        <input type="checkbox" name="Checkboxes3_1"
                          checked={fleetCanCreate}
                          onChange={(e) => setFleetCanCreate(e.target.checked)}
                        />
                        <span />
                      CREATE NEW
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" 
                            checked={fleetIsCreateRequired}
                            onChange={(e) => setFleetIsCreateRequired(e.target.checked)}
                          />
                          <span className="custom-switch-slider custom-switch-round"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={fleetCanViewList}
                          onChange={(e) => setFleetCanViewList(e.target.checked)}/>
                        <span />
                      VIEW LIST
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" 
                            checked={fleetIsViewListRequired}
                            onChange={(e)=>setFleetIsViewListRequired(e.target.checked)}/>
                          <span className="custom-switch-slider custom-switch-round"
                          
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={fleetCanUpdate}
                          onChange={(e) => setFleetCanUpdate(e.target.checked)}
                        />
                        <span />
                      UPDATE
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox"checked={fleetIsUpdateRequired}
                            onChange={(e)=> setFleetIsUpdateRequired(e.target.checked)} />
                          <span className="custom-switch-slider custom-switch-round"
                          
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-lg">
                        <input type="checkbox" name="Checkboxes3_1" 
                          checked={fleetCanDelete}
                          onChange={(e) => setFleetCanDelete(e.target.checked)}
                        />
                        <span />
                      EDIT
                      </label>
                      <div className="form-check form-switch">
                        <label className="custom-switch">
                          <input className="custom-switch-input" type="checkbox" checked={fleetIsDeleteRequired}
                            onChange={(e)=> setFleetIsDeleteRequired(e.target.checked)}/>
                          <span className="custom-switch-slider custom-switch-round"
                          
                          ></span>
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