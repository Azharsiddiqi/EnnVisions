import React from 'react';
import {PRIVATE_ROUTES} from '../../config';
import {useHistory} from 'react-router-dom';

export default () => {
  const history = useHistory();
  return (
    <div>
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="add-edit-role dash-body create_main_categories">
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Item Name"
                    aria-describedby="emailHelp"
                    placeholder="Item Name"
                  />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Title" placeholder="Title" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Details" />
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="active">ACTIVE</option>
                    <option value="inactive">IN ACTIVE</option>
                  </select>
                </div>

                <div className="add-document-btn mt-5">
                  <button
                    type="button"
                    className="submit-btn"
                    onClick={() => {
                      history.push(PRIVATE_ROUTES.userRoles.superAdmin.path);
                    }}>
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="table-container">
                  <table className="table">
                    <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th className="pg-14-id">ID</th>
                        <th className="pg-14-full-name">ITEM NAME</th>
                        <th className="pg-14-rest-name">DETAILS</th>
                        <th className="pg-14-status">STATUS</th>
                        <th className="pg-14-action">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="pg-14-id">
                          <b>1</b>
                        </th>
                        <th className="pg-14-name">Chicken Karaage</th>
                        <th className="pg-14-name">ONLY FOOD</th>
                        <th className="pg-14-name">ACTIVE</th>
                        <th className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" alt="" />
                          </span>
                          {/* Modal */}
                          <div
                            className="modal fade del-modal"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <img src="assets/images/ic-logo.svg" alt="" />
                                </div>
                                <div className="modal-body">
                                  <div className="modal-text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                  </div>
                                  <div className="modal-btn">
                                    <button type="button" className="yes-btn">
                                      YES!
                                    </button>
                                    <button
                                      type="button"
                                      data-dismiss="modal"
                                      className="cancel-btn">
                                      CANCEL
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="ic-edit">
                            <img src="assets/images/new-edit.svg" alt="" />
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th className="pg-14-id">
                          <b>1</b>
                        </th>
                        <th className="pg-14-name">8.Small Boat</th>
                        <th className="pg-14-name">ONLY FOOD</th>
                        <th className="pg-14-name">ACTIVE</th>
                        <th className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" alt="" />
                          </span>
                          {/* Modal */}
                          <div
                            className="modal fade del-modal"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <img src="assets/images/ic-logo.svg" alt="" />
                                </div>
                                <div className="modal-body">
                                  <div className="modal-text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                  </div>
                                  <div className="modal-btn">
                                    <button type="button" className="yes-btn">
                                      YES!
                                    </button>
                                    <button
                                      type="button"
                                      data-dismiss="modal"
                                      className="cancel-btn">
                                      CANCEL
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="ic-edit">
                            <img src="assets/images/new-edit.svg" alt="" />
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th className="pg-14-id">
                          <b>1</b>
                        </th>
                        <th className="pg-14-name">Spicy Salmon Roll</th>
                        <th className="pg-14-name">ONLY FOOD</th>
                        <th className="pg-14-name">ACTIVE</th>
                        <th className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" alt="" />
                          </span>
                          {/* Modal */}
                          <div
                            className="modal fade del-modal"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <img src="assets/images/ic-logo.svg" alt="" />
                                </div>
                                <div className="modal-body">
                                  <div className="modal-text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                  </div>
                                  <div className="modal-btn">
                                    <button type="button" className="yes-btn">
                                      YES!
                                    </button>
                                    <button
                                      type="button"
                                      data-dismiss="modal"
                                      className="cancel-btn">
                                      CANCEL
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="ic-edit">
                            <img src="assets/images/new-edit.svg" alt="" />
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th className="pg-14-id">
                          <b>1</b>
                        </th>
                        <th className="pg-14-name">Soup and Salad</th>
                        <th className="pg-14-name">ONLY FOOD</th>
                        <th className="pg-14-name">ACTIVE</th>
                        <th className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" alt="" />
                          </span>
                          {/* Modal */}
                          <div
                            className="modal fade del-modal"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <img src="assets/images/ic-logo.svg" alt="" />
                                </div>
                                <div className="modal-body">
                                  <div className="modal-text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                  </div>
                                  <div className="modal-btn">
                                    <button type="button" className="yes-btn">
                                      YES!
                                    </button>
                                    <button
                                      type="button"
                                      data-dismiss="modal"
                                      className="cancel-btn">
                                      CANCEL
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="ic-edit">
                            <img src="assets/images/new-edit.svg" alt="" />
                          </span>
                        </th>
                      </tr>
                      {/* <tr>
                        <th className="pg-14-id">
                          <b>1</b>
                        </th>
                        <th className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              name="text"
                              placeholder="Item name"
                              className="form-control"
                            />
                          </div>
                        </th>
                        <th className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              name="text"
                              placeholder="Details"
                              className="form-control"
                            />
                          </div>
                        </th>
                        <th className="pg-14-name">
                          <div className="form-group">
                            <select className="form-control">
                              <option value="active">ACTIVE</option>
                              <option value="inactive">IN-ACTIVE</option>
                              <option value="active">ACTIVE</option>
                              <option value="inactive">IN-ACTIVE</option>
                            </select>
                          </div>
                        </th>
                        <th className="td-action-icon">
                          <span className="plus-sign">+ Add</span>
                        </th>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
