import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const vehicleMakeManagement = () => {
  const navigate = useNavigate();
  return <div>
    <div className="d-flex flex-column-fluid">
      {/*begin::Container*/}
      <div className=" container ">
        {/*begin::Dashboard*/}
        {/*begin::Row*/}
        <div className="add-edit-role dash-body create_main_categories vehicle-type-container vehicle-company">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 table-container">
              <div className="table-content">
                <table className="table">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">COMPANY NAME</th>
                      <th scope="col" className="role-status">STATUS</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    Toyota
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    Honda
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    Suzuki
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    BMW
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    Yamaha
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    Audi
                      </td>
                      <td className="user-number">
                        <button className="btn active-btn">ACTIVE</button>
                      </td>
                      <td className="create-at">13-August-2020</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" />
                          <img src="assets/images/new-edit.svg" className="edit" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5 vehicle-container-sm">
              <div className="vehicle-company-container">
                <div className="vehicle-company-content">
                  <h1 className="add-company">ADD NEW COMPANY</h1>
                  <p>Leave your restaurant details here and we will be in touch shortly.</p>
                </div>
                <div className="form-group">
                  <input type="text" name="company-name" placeholder="Company Name*" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Status*</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="active">Active</option>
                    <option value="in-active">In active</option>
                  </select>
                </div>
                <div className="add-document-btn mt-0 mb-15">
                  <button type="button" className="submit-btn"
                    onClick={()=>navigate(PRIVATE_ROUTES.documentManage.documents.path)} >SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>   		
      </div>
    </div>

  </div>;
};
export default vehicleMakeManagement;
