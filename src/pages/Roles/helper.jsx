import React from 'react';

export default () => { 
  return (
    <React.Fragment>
      <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
      <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
          {/*begin::Info*/}
          <div className="d-flex align-items-center flex-wrap mr-2">
            {/*begin::Page Title*/}
            <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
                DASHBOARD                            
            </h5>
            {/*end::Page Title*/}
            {/*begin::Actions*/}
            <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">USER ROLES</span>
                {/*end::Actions*/}
            </div>
          </div>
      </div>
      <div className="row">
          <div className="dash-body">
            <div className="page-3-table">
                <table className="table">
                  <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th scope="col" className="role-id">ID</th>
                        <th scope="col" className="role-name">FULL NAME</th>
                        <th scope="col" className="role-company">COMPANY NAME</th>
                        <th scope="col" className="role-email">EMAIL</th>
                        <th scope="col" className="role-phone">PHONE</th>
                        <th scope="col" className="role-status">STATUS</th>
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
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="user-id">
                            1
                        </td>
                        <td className="user-name-td">
                            ADNAN QURESHI
                        </td>
                        <td className="user-company">DiDI Cab</td>
                        <td className="user-email">adnan.ahsan21@gmail.com</td>
                        <td className="user-number">+923008134076</td>
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
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}