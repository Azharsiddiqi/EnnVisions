import React from "react";
import { useHistory } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../config";

export default () => {
  const history = useHistory();
  return (
    <div className="d-flex">
      {/* begin::Container */}
      <div className=" container ">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="add-edit-role dash-body">
          <div className="row">
            <div className="col-md-2">
              <img src="assets/images/035-boy-15.svg" alt="" />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="ROLE NAME"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="DISPLAY NAME"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="COMMISSION"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      placeholder="Role Description"
                      rowSpan={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="add-edit-permission">ROLE PERMISSIONS</h1>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE ADMIN
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW ADMIN
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE ADMIN
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE ADMIN
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE FLEET
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW FLEET
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE FLEET
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE FLEET
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE FLEET DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW FLEET DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE FLEET DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE FLEET DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VENDOR
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VENDOR DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VENDOR WAITER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VENDOR WAITER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VENDOR WAITER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VENDOR WAITER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE DATA ANALYST
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW DATA ANALYST
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE DATA ANALYST
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE DATA ANALYST
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE CUSTOMER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW CUSTOMER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE CUSTOMER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE CUSTOMER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE DRIVER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE SALE AGENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW SALE AGENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE SALE AGENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE SALE AGENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE AD AGENCY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW AD AGENCY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE AD AGENCY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE AD AGENCY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE LOCATION MANAGER
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE PROMO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW PROMO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE PROMO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE PROMO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE MAIN CATEGORY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW MAIN CATEGORY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE MAIN CATEGORY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE MAIN CATEGORY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE MAIN CATEGORY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE HELP
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW HELP
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE HELP
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE HELP
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE CITY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW CITY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE CITY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE CITY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE CANCEL REASON
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW CANCEL REASON
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE CANCEL REASON
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE CANCEL REASON
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE REVIEW ISSUE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW REVIEW ISSUE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE REVIEW ISSUE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE REVIEW ISSUE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE RECIPIENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW RECIPIENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW RECIPIENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE RECIPIENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE RECIPIENT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      CREATE VEHICLE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      VIEW VEHICLE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      UPDATE VEHICLE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      DELETE VEHICLE TYPE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE ORDERS
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE PAYOUTS
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE METAS
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE OWE AMOUNT
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE PENALTY
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE SEND MESSAGE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE SITE SETTINGS
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="checkbox checkbox-lg">
                      <input type="checkbox" name="Checkboxes3_1" />
                      <span />
                      MANAGE FQA
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 add-document-btn">
              <button
                onClick={() =>
                  history.push(
                    PRIVATE_ROUTES.userRoles.createRegistrationForm.path
                  )
                }
                type="button"
                className="submit-btn"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
