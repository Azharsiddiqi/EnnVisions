import React from 'react';

export default () => {
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
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Main Categories name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Main Categories Details"
                    defaultValue={''}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Active">Active</option>
                    <option value="in-active">In active</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">Display Title</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">Display Description</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Dropdown</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Check Box</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Multiple Selection</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Required</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="creat-main-category-submit  mt-5">
                  <button className="btn" type="button">
                    UPDATE
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="table-container">
                  <div className="btn-inactive">
                    <button className="btn" type="button">
                      MADE INACTIVE?
                    </button>
                  </div>
                  <table className="table">
                    <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th scope="col" className="pg-14-id">
                          ID
                        </th>
                        <th scope="col" className="pg-14-full-name">
                          ITEM NAME
                        </th>
                        <th scope="col" className="pg-14-rest-name">
                          DETAILS
                        </th>
                        <th scope="col" className="pg-14-status">
                          STATUS
                        </th>
                        <th scope="col" className="pg-14-action">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="col" className="pg-14-id">
                          <b>1</b>
                        </td>
                        <td scope="col" className="pg-14-name">
                          Chicken Karaage
                        </td>
                        <td scope="col" className="pg-14-name">
                          For Only Food
                        </td>
                        <td scope="col" className="pg-14-name">
                          ACTIVE
                        </td>
                        <td scope="col" className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" />
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
                                  <img src="assets/images/ic-logo.svg" />
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
                            <img src="assets/images/new-edit.svg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" className="pg-14-id">
                          <b>1</b>
                        </td>
                        <td scope="col" className="pg-14-name">
                          8. Small Boat
                        </td>
                        <td scope="col" className="pg-14-name">
                          For Only Food
                        </td>
                        <td scope="col" className="pg-14-name">
                          ACTIVE
                        </td>
                        <td scope="col" className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" />
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
                                  <img src="assets/images/ic-logo.svg" />
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
                            <img src="assets/images/new-edit.svg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" className="pg-14-id">
                          <b>1</b>
                        </td>
                        <td scope="col" className="pg-14-name">
                          Spicy Salmon Roll
                        </td>
                        <td scope="col" className="pg-14-name">
                          For Only Food
                        </td>
                        <td scope="col" className="pg-14-name">
                          ACTIVE
                        </td>
                        <td scope="col" className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" />
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
                                  <img src="assets/images/ic-logo.svg" />
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
                            <img src="assets/images/new-edit.svg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" className="pg-14-id">
                          <b>1</b>
                        </td>
                        <td scope="col" className="pg-14-name">
                          Soup and Salad
                        </td>
                        <td scope="col" className="pg-14-name">
                          For Only Food
                        </td>
                        <td scope="col" className="pg-14-name">
                          ACTIVE
                        </td>
                        <td scope="col" className="td-action-icon">
                          <span
                            className="del-icon"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            <img src="assets/images/new-delete.svg" />
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
                                  <img src="assets/images/ic-logo.svg" />
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
                            <img src="assets/images/new-edit.svg" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" className="pg-14-id">
                          <b>1</b>
                        </td>
                        <td scope="col" className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              name="text"
                              placeholder="Item name"
                              className="form-control"
                            />
                          </div>
                        </td>
                        <td scope="col" className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              name="text"
                              placeholder="Details"
                              className="form-control"
                            />
                          </div>
                        </td>
                        <td scope="col" className="pg-14-name">
                          <div className="form-group">
                            <select className="form-control">
                              <option value="active">ACTIVE</option>
                              <option value="inactive">IN-ACTIVE</option>
                              <option value="active">ACTIVE</option>
                              <option value="inactive">IN-ACTIVE</option>
                            </select>
                          </div>
                        </td>
                        <td scope="col" className="td-action-icon">
                          <span className="plus-sign">+ Add</span>
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
    </div>
  );
};
