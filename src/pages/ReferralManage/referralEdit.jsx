import React from 'react';

const referralEdit  = () => {
  return <div><div className="d-flex flex-column-fluid">
    {/*begin::Container*/}
    <div className=" container ">
      {/*begin::Dashboard*/}
      {/*begin::Row*/}
      <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
        <div className="vehicle-info">
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <label>User Full Name</label>
                <input type="text" name="name" className="form-control" placeholder="Adnan Qureshi" />
              </div>
              <div className="form-group">
                <label>Referrer Name</label>
                <input type="text" name="name" className="form-control" placeholder="O'Neil McLean" />
              </div>
              <div className="form-group">
                <label>2nd Referrer Name</label>
                <input type="text" name="name" className="form-control" placeholder="Waqas Ahmed" />
              </div>
              <div className="form-group">
                <label>Earned Amount</label>
                <div className="input-with-label">
                  <input type="text" name="admin service" className="form-control" placeholder="50.56" />
                  <span>$</span>
                </div>
              </div>
              <div className="form-group">
                <label>Pending Amount</label>
                <div className="input-with-label">
                  <input type="text" name="admin service" className="form-control" placeholder="45000.25" />
                  <span>$</span>
                </div>
              </div>
              <div className="form-group">
                <label>Current Status</label>
                <input type="text" name="current-status" className="form-control" />
              </div>
              <div className="add-document-btn mt-0 mb-15">
                <button type="button" className="submit-btn">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default referralEdit;
