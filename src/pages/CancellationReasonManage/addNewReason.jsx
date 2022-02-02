import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';


const addNewReason = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return <div>
    <div className="d-flex flex-column-fluid">
      <ConfirmationAlert
        show={show}
        description={
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
        handleSave={handleClose}
        handleClose={handleClose}
      />
      {/*begin::Container*/}
      <div className=" container ">
        {/*begin::Dashboard*/}
        {/*begin::Row*/}
        <div className="add-edit-role dash-body create_main_categories vehicle-type-container ad-cancel-reason">
          <div className="row">
            <div className="col-md-5">
              <div className="vehicle-info">
                <div className="form-group">
                  <label>Assign to</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <div className="plus-btn-container">
                    <input type="text" name="title" className="form-control mr-3" placeholder="user title" />
                    <button className="plus-btn">+</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Sub-Title</label>
                  <input type="text" name="sub-title" className="form-control" placeholder="Enter sub-title" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" defaultValue={'Add Description'} />
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 custom-p">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Active">Active</option>
                        <option value="in-active">In active</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 pr-0 custom-p">
                    <div className="form-group">
                      <label>Penalty</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Active">Active</option>
                        <option value="in-active">In active</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 custom-p ad-cancel-reason-label">
                    <div className="form-group">
                      <div className="input-with-label">
                        <input type="text" name="admin service" className="form-control" placeholder={50} />
                        <span>$</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 custom-p pr-0 ad-cancel-reason-label">
                    <div className="form-group">
                      <div className="input-with-label">
                        <input type="text" name="admin service" className="form-control" placeholder={10} />
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-document-btn mt-5">
                  <button type="button" className="submit-btn">SUBMIT</button>
                </div>
              </div>
            </div>
            <div className="col-md-7 table-container">
              <div className="table-content">
                <table className="table ad-cancel-reason">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">SUB TITLE</th>
                      <th scope="col" className="role-status">STATUS</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                      </td>
                      <td className="status-td">ACTIVE</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="ad-cancel-save-btn-container">
                  <button type="button" className="btn ad-cancel-save-btn"
                    onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonList.path)}
                  >SAVE</button>
                </div>
              </div>
            </div>
          </div>
        </div>   		
      </div>
    </div>

  </div>;
};
export default addNewReason;
