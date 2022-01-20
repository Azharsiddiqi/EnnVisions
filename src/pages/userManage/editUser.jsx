import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const  editUser = () => {
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
                  <label>Restaurant Name</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="restaurant-one">Restaurant One</option>
                    <option value="restaurant-second">Restaurant Second</option>
                    <option value="restaurant-third">Restaurant Third</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="first name" placeholder="First Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" name="last name" placeholder="Last Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="tel" name="tel" placeholder="Phone Number" className="form-control" />
                </div>
                <div className="row edit-user-select">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Ontario">Ontario</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Ontario">Ontario</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Toronto">Toronto</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Toronto">Toronto</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="address" placeholder="Address" className="form-control" />
                </div>
                <div className="creat-main-category-submit mt-5">
                  <button className="btn" type="button"
                    onClick={()=> navigate(PRIVATE_ROUTES.userManage.userList.path)}
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
export default editUser;
