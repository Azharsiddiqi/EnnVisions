import React from 'react';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';
const addLocation = () => {
  const navigate = useNavigate();
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
                  <label>Select Country</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Pakistan">PAKISTAN</option>
                    <option value="India">INDIA</option>
                    <option value="Canada">CANADA</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Select State</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="PUNJAB">PUNJAB</option>
                    <option value="SINDH">SINDH</option>
                    <option value="KPK">KPK</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Select City</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="PUNJAB">PUNJAB</option>
                    <option value="SINDH">SINDH</option>
                    <option value="KPK">KPK</option>
                  </select>
                </div>
                <div className="breakfast">
                  <img src="assets/images/ic_tab_delete_all.svg" />
                  <span className="bf-favourite">XP Eata
                    <img src="assets/images/ic_tab_remove.svg" />
                  </span>
                  <span className="bf-favourite">Door Bud
                    <img src="assets/images/ic_tab_remove.svg" />
                  </span>
                  <span className="add-category">Add a Admin</span>
                  <img src="assets/images/ic_red_search.svg" className="red-search" />
                </div>
                <p className="listed">Listed in following City</p>
                <div className="breakfast">
                  <img src="assets/images/ic_tab_delete_all.svg" />
                  <span className="bf-favourite">XP Eata
                    <img src="assets/images/ic_tab_remove.svg" />
                  </span>
                  <span className="add-category">Add a Main Categories</span>
                </div>	
                <p className="listed">Listed in following Admin</p>
                <div className="creat-main-category-submit mt-5">
                  <button className="btn" type="button"
                    onClick={()=> navigate(PRIVATE_ROUTES.locationManage.helper.path)}
                  >SUBMIT</button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="table-container">
                  <div className="btn-inactive">
                    <button className="btn" type="button">MADE INACTIVE?</button>
                  </div>
                  <div className="map-bg">
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
export default addLocation;
