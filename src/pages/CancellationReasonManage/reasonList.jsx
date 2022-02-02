import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
const reasonList = () => {
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
          <div className="col-12 table-container">
            <div className="table-content">
              <table className="table ad-cancel-reason user-guide-list">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="page-name">TITLE</th>
                    <th scope="col" className="title-td">SUB TITLE</th>
                    <th scope="col" className="attached-td">PENALTY</th>
                    <th scope="col" className="role-status">STATUS</th>
                    <th scope="col" className="attached-td">CREATED AT</th>
                    <th scope="col" className="role-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td cursor-class-hover"  
                      onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path)}>
                    ADNAN QURESHI
                    </td>
                    <td scope="row" className="user-name-td">
                    adnan.ahsan21@gmail.com
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td scope="row" className="user-name-td">
                    Active
                    </td>
                    <td className="user-name-td">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path)} />
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
export default reasonList;
