import React from 'react';
import { PRIVATE_ROUTES } from '../../../config';
import { useHistory } from 'react-router-dom';

export default function () {
  const history = useHistory();
  return (
    <div
      className="content  d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      {/*begin::Subheader*/}
      <div
        className="subheader py-2 py-lg-4  subheader-solid "
        id="kt_subheader"
      >
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
            <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">
              OUT LET DETAIL
            </span>
            {/*end::Actions*/}
          </div>
        </div>
      </div>
      {/*end::Subheader*/}
      {/*begin::Entry*/}
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="row">
            <div className="dash-body">
              <div className="page-14-table">
                <table className="table">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="pg-14-id">
                        ID
                      </th>
                      <th scope="col" className="pg-14-full-name">
                        FULL NAME
                      </th>
                      <th scope="col" className="pg-14-rest-name">
                        RESTAURANT NAME
                      </th>
                      <th scope="col" className="pg-14-email">
                        EMAIL
                      </th>
                      <th scope="col" className="pg-14-phone">
                        PHONE
                      </th>
                      <th scope="col" className="pg-14-status">
                        STATUS
                      </th>
                      <th scope="col" className="pg-14-created">
                        CREATED AT
                      </th>
                      <th scope="col" className="pg-14-action">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        history.push(
                          PRIVATE_ROUTES.vendorManage.outLetDetail.path,
                        );
                      }}
                    >
                      <td className="pg-14-id">
                        <b>1</b>
                      </td>
                      <td className="pg-14-name">ADNAN QURESHI</td>
                      <td className="pg-14-name">DiDI Cab</td>
                      <td className="pg-14-name">a----21@gmail.com</td>
                      <td className="pg-14-name">Document_details</td>
                      <td className="pg-14-name">+923008134076</td>
                      <td className="pg-14-name">13-August-2020</td>
                      <td className="td-action-icon">
                        <a href="outlet-schedule.html">
                          <span className="preparation-t">
                            <img
                              src="assets/images/ic_prepration_time.svg"
                              alt=""
                            />
                          </span>
                        </a>
                        <a href="outlet-menu-page131.html">
                          <span className="item-list">
                            <img src="assets/images/ic_item_list.svg" alt="" />
                          </span>
                        </a>
                        <span
                          className="ic-schedule"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <img src="assets/images/ic_schedule.svg" alt="" />
                        </span>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  MANAGE OPEN TIME
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="page-6-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={8}>
                                                08:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={11}>
                                                11:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="inactive-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={8}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={11}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="active-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="active-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="inactive-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="modal-submit-btn">
                                    <button type="button" className="btn">
                                      SUBMIT
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="ic-delete">
                          <img src="assets/images/new-delete.svg" alt="" />
                        </span>
                        <span className="ic-edit">
                          <img src="assets/images/new-edit.svg" alt="" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pg-14-id">
                        <b>1</b>
                      </td>
                      <td className="pg-14-name">ADNAN QURESHI</td>
                      <td className="pg-14-name">DiDI Cab</td>
                      <td className="pg-14-name">a----21@gmail.com</td>
                      <td className="pg-14-name">+923008134076</td>
                      <td className="pg-14-name">Document_details</td>
                      <td className="pg-14-name">13-August-2020</td>
                      <td className="td-action-icon">
                        <a href="outlet-schedule.html">
                          <span className="preparation-t">
                            <img
                              src="assets/images/ic_prepration_time.svg"
                              alt=""
                            />
                          </span>
                        </a>
                        <a href="outlet-menu-page131.html">
                          <span className="item-list">
                            <img src="assets/images/ic_item_list.svg" alt="" />
                          </span>
                        </a>
                        <span
                          className="ic-schedule"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <img src="assets/images/ic_schedule.svg" alt="" />
                        </span>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  MANAGE OPEN TIME
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="page-6-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={8}>
                                                08:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={11}>
                                                11:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="inactive-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={8}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={11}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="active-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="active-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={30}>30 min</option>
                                              <option value={40}>40 min</option>
                                              <option value={50}>50 min</option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value="Friday">
                                                Friday
                                              </option>
                                              <option value="Tuesday">
                                                Tuesday
                                              </option>
                                              <option value="Wednesday">
                                                Wednesday
                                              </option>
                                              <option value="Thursday">
                                                Thursday
                                              </option>
                                              <option value="Monday">
                                                Monday
                                              </option>
                                              <option value="Saturday">
                                                Saturday
                                              </option>
                                              <option value="Sunday">
                                                Sunday
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                09:00 AM
                                              </option>
                                              <option value={10}>
                                                10:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="form-group pg-6-time">
                                            <select className="form-control">
                                              <option value={12}>
                                                12:00 AM
                                              </option>
                                              <option value={9}>
                                                12:00 AM
                                              </option>
                                              <option value={10}>
                                                01:00 AM
                                              </option>
                                            </select>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="inactive-btn"
                                          >
                                            INACTIVE
                                          </button>
                                        </td>
                                        <td>
                                          <span className="delete-icon">
                                            <img
                                              src="assets/images/new-delete.svg"
                                              alt=""
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="modal-submit-btn">
                                    <button type="button" className="btn">
                                      SUBMIT
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="ic-delete">
                          <img src="assets/images/new-delete.svg" alt="" />
                        </span>
                        <span className="ic-edit">
                          <img src="assets/images/new-edit.svg" alt="" />
                        </span>
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
}
