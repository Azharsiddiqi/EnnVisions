import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const userGuideDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return <div><div className="d-flex flex-column-fluid">
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
          <div className="col-md-7 table-container">
            <div className="table-content">
              <table className="table ad-cancel-reason">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="role-name">PAGE NAME</th>
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
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
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userGuideManage.addUserGuide.path)} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
          <div className="col-md-5">
            <div className="vehicle-info">
              <div className="form-group">
                <label>Assign to</label>
                <input className="form-control" id="exampleFormControlSelect1" defaultValue={'Admin'}>
                  
                </input>
              </div>
              <div className="form-group">
                <label>Page Name</label>
                <div className="plus-btn-container">
                  <input type="text" name="title" className="form-control mr-3" defaultValue={'Intro Screen'} />
                  
                </div>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="sub-title" className="form-control" defaultValue={'Slider Image'} />
              </div>
              <div className="form-group">
                <textarea className="form-control" 
                  defaultValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisi sit amet sem mattis scelerisque. Integer eros ex, fringilla rhoncus varius eu, porttitor vitae orci. Nam nisi nibh, bibendum mattis massa et, dapibus iaculis enim.'} 
                />
              </div>
              <div className="form-group">
               
                <input type="text" name="sub-title" className="form-control" defaultValue={'Intro.PDF'} />
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default userGuideDetails;
