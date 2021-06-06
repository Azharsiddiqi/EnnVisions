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

                    <div className="view-admin-form">
      <form action="#" method="post">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" defaultValue="O'Neil McLean" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name" defaultValue="XP Eats" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+92 3008134076" defaultValue={+923008134076} />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" defaultValue="xpeats@ennvisions.com" />
            </div>	
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company mailing address" defaultValue="7250 Keele St, Concord, ON L4K 1Z8, Canada" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Country</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" defaultValue="Canada" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">State</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" defaultValue="Ontario" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" defaultValue="Concord" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip code" defaultValue="L4K 1Z8" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Registration Number" defaultValue="456-786-456-789" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website" defaultValue="www.xpeats.com" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Industry*</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Industry" defaultValue="Food, Pharma, Grocery," />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Company Share</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Share" defaultValue="20%" />
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="file" className="form-control upload" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance (Photo)" />
              <div className="fakefile">
                <span className="placeholder">Insurance <span className="light">(Photo)</span></span>
                <input />
                <img src="assets/images/ic_upload.svg" alt=""/>
              </div>
            </div>	
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance Expiry Date" defaultValue="12, AUGUST, 2022" />
              <img src="assets/images/ic_calendar.svg" className="calendar-icon" alt=""/>
            </div>	
          </div>
        </div>
      </form>
    </div>

  </React.Fragment>
  );
}