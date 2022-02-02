import React from 'react';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';

const editFareManagement = () => {
  const navigate = useNavigate();
  return <div><div className="d-flex flex-column-fluid">
    {/*begin::Container*/}
    <div className=" container ">
      {/*begin::Dashboard*/}
      {/*begin::Row*/}
      <div className="add-edit-role dash-body create_main_categories">
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label>Location*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Pakistan">Pakistan</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="Base Fare*" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="$ 2.20" defaultValue="$ 2.20" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="minutes" defaultValue="5 minutes" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="$ 2.50" defaultValue="$ 2.50" />
            </div>
            <div className="form-group">
              <label>Apply Peak Fare *</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <label>Vehicle Name *</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="EV-GO">EV GO</option>
                <option value="Lexus">Lexus</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="Capacity*" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="$ 3.50" defaultValue="$ 3.50" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="$0.50" defaultValue="$0.50" />
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="PKR" defaultValue="PKR" />
            </div>
            <div className="form-group">
              <label>Apply Peak Fare *</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-10 add-document-btn mt-1">
            <button type="button" className="submit-btn"
              onClick={()=> navigate(PRIVATE_ROUTES.fareManage.manageFareManagement.path)}
            >SUBMIT</button>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default editFareManagement;
