import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const fareManagement = () => {
  const navigate = useNavigate( );
  return <div>
    <div className="d-flex flex-column-fluid">
      {/*begin::Container*/}
      <div className=" container ">
        {/*begin::Dashboard*/}
        {/*begin::Row*/}
        <div className="add-edit-role dash-body create_main_categories">
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <label>Location</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Base Fare*" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Minimum Fare*" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Waiting Time Limit (In Minutes) *" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Schedule Ride Fare*" />
              </div>
              <div className="form-group">
                <label>Apply Peak Fare *</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Active">Active</option>
                  <option value="In-active">In active</option>
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label>Vehicle Name *</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Car">Car</option>
                  <option value="Bus">Bus</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Capacity*" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Per Kilometer*" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Waiting Charges (Per Minute) *" />
              </div>
              <div className="form-group">
                <input type="text" name="document" className="form-control" placeholder="Currency code*" />
              </div>
              <div className="form-group">
                <label>Apply Night Fare *</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-10 add-document-btn mt-0">
              <button type="button" className="submit-btn"
                onClick={()=>navigate(PRIVATE_ROUTES.fareManage.manageFareManagement.path)}
              >SUBMIT</button>
            </div>
          </div>
        </div>   		
      </div>
    </div>

  </div>;
};
export default fareManagement;
