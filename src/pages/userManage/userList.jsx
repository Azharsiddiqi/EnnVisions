import React, { useState } from 'react';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';
import ConfirmationAlert from '../../components/confirmationAlert';

const  userList = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
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
          <div className="row">
            <div className="dash-body">
              <div className="page-3-table">
                <table className="table main-categories-list">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">FULL NAME</th>
                      <th scope="col" className="role-name">COMPANY NAME</th>
                      <th scope="col" className="counter-td">EMAIL</th>
                      <th scope="col" className="counter-td">PHONE</th>
                      <th scope="col" className="counter-td">STATUS</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-rating">RATING</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                      </td>
                      <td className="user-email">Didi Cab</td>
                      <td className="user-number">adnan.ahsan21@gmail.com</td>
                      <td className="user-status">+923008134076</td>
                      <td className="user-status">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.userManage.editUser.path)}/>
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
  );
};
export default userList;
