import React from 'react';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';

const editWaiter = () => {
  const navigate =useNavigate();
  return (
    <div>
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="row">
            <div className="dash-body">
              <div className="create-fleet-form new-driver-container">
                <div className="row">
                  <div className="col-md-6">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                          </div>	
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last name" />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option>Ontario</option>
                              <option>Alberta</option>
                              <option>Sasweitch</option>
                            </select>
                          </div>	
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
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
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vehicle Name / eg: Toyoto Camry, Honda Accord..." />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vehicle Number / eg: WNF 382" />
                          </div>	
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Choose your vehicle type</label>
                            <select className="form-control" id="exampleFormControlSelect1">
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
                            <img src="assets/images/ic_document.svg" alt="Document" />
                            <p>Driver's License- (Back/Reverse)</p>
                            <button type="button" className="btn process-btn">PROCESS</button>
                          </div>
                          <div className="driver-license">
                            <img src="assets/images/ic_document.svg" alt="Document" />
                            <p>Driver's License- (Back/Reverse)</p>
                            <button type="button" className="btn uploaded-btn">UPLOADED</button>
                          </div>
                          <div className="driver-license">
                            <img src="assets/images/ic_document.svg" alt="Document" />
                            <p>Driver's License- (Back/Reverse)</p>
                            <button type="button" className="btn uploaded-btn">UPLOADED</button>
                          </div>
                          <div className="driver-license">
                            <img src="assets/images/ic_document.svg" alt="Document" />
                            <p>Driver's License- (Back/Reverse)</p>
                            <button type="button" className="btn process-btn">PROCESS</button>
                          </div>
                          <div className="driver-license">
                            <img src="assets/images/ic_document.svg" alt="Document" />
                            <p>Driver's License- (Back/Reverse)</p>
                            <button type="button" className="btn upload-btn">UPLOAD</button>
                          </div>
                        </div>
                      </div>
                      <div className="create-vendor-submit">
                        <button className="btn" type="button"
                          onClick={()=> navigate(PRIVATE_ROUTES.waiterManage.waiterList.path)}
                        >SUBMIT</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="made-inactive">
                      <button type="button">MADE INACTIVE</button>
                    </div>
                    <div className="map-container" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default editWaiter;
