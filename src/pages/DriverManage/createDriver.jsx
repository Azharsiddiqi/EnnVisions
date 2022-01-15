import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const CreateDriver = () => {
  const navigate = useNavigate();

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
              CREATE DRIVER
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
              <div className="create-fleet-form new-driver-container">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Ontario</option>
                          <option>Alberta</option>
                          <option>Sasweitch</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Toronto</option>
                          <option>Toronto</option>
                          <option>Toronto</option>
                          <option>Toronto</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Vehicle Name / eg: Toyoto Camry, Honda Accord..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Vehicle Number / eg: WNF 382"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Choose your vehicle type
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>EV Go</option>
                          <option>TESLA</option>
                          <option>FORD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="driver-license">
                        <img
                          src="/assets/images/ic_document.svg"
                          alt="Document"
                        />
                        <p>Driver's License- (Back/Reverse)</p>
                        <button type="button" className="btn process-btn">
                          PROCESS
                        </button>
                      </div>
                      <div className="driver-license">
                        <img
                          src="/assets/images/ic_document.svg"
                          alt="Document"
                        />
                        <p>Driver's License- (Back/Reverse)</p>
                        <button type="button" className="btn uploaded-btn">
                          UPLOADED
                        </button>
                      </div>
                      <div className="driver-license">
                        <img
                          src="/assets/images/ic_document.svg"
                          alt="Document"
                        />
                        <p>Driver's License- (Back/Reverse)</p>
                        <button type="button" className="btn uploaded-btn">
                          UPLOADED
                        </button>
                      </div>
                      <div className="driver-license">
                        <img
                          src="/assets/images/ic_document.svg"
                          alt="Document"
                        />
                        <p>Driver's License- (Back/Reverse)</p>
                        <button type="button" className="btn process-btn">
                          PROCESS
                        </button>
                      </div>
                      <div className="driver-license">
                        <img
                          src="/assets/images/ic_document.svg"
                          alt="Document"
                        />
                        <p>Driver's License- (Back/Reverse)</p>
                        <button type="button" className="btn upload-btn">
                          UPLOAD
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="create-vendor-submit">
                    <button  
                      type="submit"
                      onClick={() => navigate(PRIVATE_ROUTES.driverManage.vendorFleet.path)}
                      className="btn"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDriver;
