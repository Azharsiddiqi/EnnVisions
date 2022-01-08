import React from 'react';
import { useHistory } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const helperList = () => {
  const history = useHistory();

  return (
    <div className="d-flex flex-column-fluid">
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
                    <th scope="col" className="role-id">
                      ID
                    </th>
                    <th scope="col" className="role-name">
                      FULL NAME
                    </th>
                    <th scope="col" className="role-name">
                      COMPANY NAME
                    </th>
                    <th scope="col" className="counter-td">
                      EMAIL
                    </th>
                    <th scope="col" className="counter-td">
                      PHONE
                    </th>
                    <th scope="col" className="counter-td">
                      STATUS
                    </th>
                    <th scope="col" className="role-create">
                      CREATED AT
                    </th>
                    <th scope="col" className="role-rating">
                      RATING
                    </th>
                    <th scope="col" className="role-action">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="table-data"
                    onClick={() =>
                      history.push(
                        PRIVATE_ROUTES.vendorManage.outLetsDetail.path,
                      )
                    }
                  >
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td className="user-name-td">ADNAN QURESHI</td>
                    <td className="user-email">Didi Cab</td>
                    <td className="user-number">adnan.ahsan21@gmail.com</td>
                    <td className="user-status">+923008134076</td>
                    <td className="user-status">Document_details</td>
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
                        <img
                          src="assets/images/new-delete.svg"
                          className="delete"
                          alt=""
                        />
                        <img
                          src="assets/images/new-edit.svg"
                          className="edit"
                          alt=""
                        />
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
  );
};

export default helperList;