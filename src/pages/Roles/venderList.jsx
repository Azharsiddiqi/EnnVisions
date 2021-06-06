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
                        <th scope="col" className="vendor-id">ID</th>
                        <th scope="col" className="vendor-name">COMPANY NAME</th>
                        <th scope="col" className="vendor-email">EMAIL</th>
                        <th scope="col" className="vendor-phone">PHONE</th>
                        <th scope="col" className="vendor-created">CREATED AT</th>
                        <th scope="col" className="vendor-outlet">OUTLET</th>
                        <th scope="col" className="vendor-rating">RATING</th>
                        <th scope="col" className="vendor-commission">COMMISSION</th>
                        <th scope="col" className="vendor-action">ACTION</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <button type="button" className="btn review-btn">REVIEW INFO</button>
                        </td>
                      </tr>
                      <tr className="active-btn-tr">
                        <td colSpan={9} className="active-td">
                            <button type="button" className="btn made-active">Made Active?</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
                        </td>
                        <td className="action-btn">
                            <div className="edit-delete-form">
                              <img src="assets/images/ic_delete_white.svg" alt=""/>
                              <img src="assets/images/ic_edit_white.svg" alt=""/>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="vendor-id">
                            1
                            <span className="vendor-image">
                            <img src="assets/images/009-boy-4.svg" alt=""/>
                            </span>
                        </td>
                        <td className="vendor-name-td">
                            PIZZA HUT
                        </td>
                        <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                        <td className="vendor-no">+923008134076</td>
                        <td className="vendor-created">13-August-2020</td>
                        <td className="vendor-outlet-t">
                            <span>TWO (2)</span>
                        </td>
                        <td className="rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </td>
                        <td className="vendor-commission">
                            20%
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