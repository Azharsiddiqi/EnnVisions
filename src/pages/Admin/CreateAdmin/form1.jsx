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

            <div class="row">
            <div class="dash-body">
                <div class="container create-admin-container">
                    <div class="create-admin-steps">
                        <div class="form-group">
                          <div class="checkbox-inline">
                              <label class="basic-info active-checkbox checkbox checkbox-lg" onClick={() =>this.props.formShowHandler(0)}>
                                  <input type="checkbox" checked="checked" name="Checkboxes3_1"/>
                                  <span></span>
                                  BASIC INFO
                              </label>
                              <label class="app-info checkbox checkbox-lg" onClick={() =>this.props.formShowHandler(1)}>
                                  <span>2</span>
                                  APP INFO
                              </label>
                              <label class="accounts-info checkbox checkbox-lg" onClick={() =>this.props.formShowHandler(2)}>
                                  <span>3</span>
                                  ACCOUNTS INFO
                              </label>
                              <label class="review-submit checkbox checkbox-lg" >
                                  <span>4</span>
                                  REVIEW & SUBMIT
                              </label>
                          </div>
                        </div>
                    </div>
                    <div class="create-admin-form">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+92 3008134076" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                    </div>	
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company mailing address" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Country</label>
                                      <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Pakistan</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>SA</option>
                                            <option>UAE</option>
                                      </select>
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">State</label>
                                      <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Punjab</option>
                                            <option>Sindh</option>
                                            <option>KPK</option>
                                            <option>AJK</option>
                                      </select>
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip code" />
                                    </div>	
                                </div>

                                <div class="col-12">
                                  <div class="map">
                                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0; width: 100%;" allowfullscreen>
                                      </iframe> */}
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Registration Number" /> 
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Vehicle Type*</label>
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FOOD" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Company Share</label>
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="20%" />
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="file" class="form-control upload" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance (Photo)" />
                                      <div class="fakefile">
                                          <span class="placeholder">Insurance <span class="light">(Photo)</span></span>
                                          <input />
                                          <img src="assets/images/ic_upload.svg" alt="" />
                                      </div>
                                    </div>	
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance Expiry Date" />
                                      <img src="assets/images/ic_calendar.svg" class="calendar-icon" alt=""/>
                                    </div>	
                                </div>
                            </div>
                            <div class="btn-fleet-submit">
                                <button type="submit" class="btn" onClick={() =>this.props.formShowHandler(1)}>NEXT</button>
                            </div>
                      </form>
                    </div>
                </div>	
            </div>
    </div>
  </React.Fragment>
        );
  }
