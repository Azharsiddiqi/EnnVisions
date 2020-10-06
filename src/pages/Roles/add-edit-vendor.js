import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddEditVendor extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="d-flex flex-column-fluid">
  {/*begin::Container*/}
  <div className=" container ">
    {/*begin::Dashboard*/}
    {/*begin::Row*/}
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
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td"> 
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="vendor-id">
                  1
                  <span className="vendor-image">
                    <img src="assets/images/009-boy-4.svg" />
                  </span>
                </td>
                <td scope="row" className="vendor-name-td">
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
                    <img src="assets/images/ic_delete_white.svg" />
                    <img src="assets/images/ic_edit_white.svg" />
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

            </React.Fragment>
        )
    }
}