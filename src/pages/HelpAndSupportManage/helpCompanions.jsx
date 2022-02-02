import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
const helpCompanions = () => {
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
        <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
          <div className="row">
            <div className="col-12 table-container">
              <div className="table-content">
                <table className="table referal-list-table companion">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">FULL NAME</th>
                      <th scope="col" className="role-name">EMAIL</th>
                      <th scope="col" className="second-referrer">USER NAME</th>
                      <th scope="col" className="role-company">PHONE</th>
                      <th scope="col" className="role-status">STATUS</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td cursor-class-hover"
                        onClick={()=>navigate(PRIVATE_ROUTES.complaintsManage.companionsOverAllStatements.path)}>
                    ADNAN QURESHI
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
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
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">adnan.ahsan</td>
                      <td className="user-company">03008134076</td>
                      <td className="user-company active-color">Active</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete"   onClick={handleShow} />
                          <img src="assets/images/new-edit.svg" className="edit" />
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
export default helpCompanions;
