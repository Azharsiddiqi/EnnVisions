import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';

const manageFareManagement = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
      <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
        <div className="row">
          <div className="col-12 table-container">
            <div className="table-content">
              <table className="table referal-list-table vehicle-type3">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="location-name">LOCATION NAME</th>
                    <th scope="col" className="role-name">VEHICLE NAME</th>
                    <th scope="col" className="document-name">APPLY NAME</th>
                    <th scope="col" className="document-name">APPLY NIGHT</th>
                    <th scope="col" className="role-status">STATUS</th>
                    <th scope="col" className="role-create">CREATED AT</th>
                    <th scope="col" className="role-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    EV Go
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">Yes</td>
                    <td className="user-company">Yes</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"  onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">Yes</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">Yes</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Pakistan
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Pakistan
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">Yes</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    USA
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    USA
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">Yes</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    USA
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Multiple</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    USA
                    </td>
                    <td className="user-company">EV Go</td>
                    <td className="user-company">No</td>
                    <td className="user-company">Single</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.fareManage.editFareManagement.ptah)} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default manageFareManagement;
