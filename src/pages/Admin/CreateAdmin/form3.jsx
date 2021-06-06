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
        <div className="container create-admin-container">
          <div className="create-admin-steps">
            <div className="form-group">
              <div className="checkbox-inline">
                <label className="basic-info active-checkbox checkbox checkbox-lg">
                  <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" onClick={() =>this.props.formShowHandler(0)}/>
                  <span />
                  BASIC INFO
                </label>
                <label className="app-info checkbox checkbox-lg">
                <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" onClick={() =>this.props.formShowHandler(1)}/>
                  <span />
                  APP INFO
                </label>
                <label className="accounts-info checkbox checkbox-lg">
                <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" onClick={() =>this.props.formShowHandler(2)}/>
                  <span />
                  ACCOUNTS INFO
                </label>
                <label className="review-submit checkbox checkbox-lg">
                  <span>4</span>
                  REVIEW &amp; SUBMIT
                </label>
              </div>
            </div>
          </div>
          <div className="create-admin-form">
            <form action="#" method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">STRIP KEY</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sole Proprietorship" />
                  </div>	
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">XP WALLET</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sole Proprietorship" />
                  </div>	
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">CUSTOMER MAP KEY</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sole Proprietorship" />
                  </div>	
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">DRIVER MAP KEY</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DRIVER MAP KEY" />
                  </div>	
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">WAITER MAP KEY</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sole Proprietorship" />
                  </div>	
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">MANAGER MAP KEY</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DRIVER MAP KEY" />
                  </div>	
                </div>
              </div>
              <div className="btn-fleet-submit">
                <button type="submit" className="btn" >NEXT</button>
              </div>
            </form>
          </div>
        </div>	
      </div>
    </div>

  </React.Fragment>
  );
}