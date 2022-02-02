import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
const  feesManagement = ()  =>{
  const navigate = useNavigate();
  return <div><div className="d-flex flex-column-fluid">
    {/*begin::Container*/}
    <div className=" container ">
      {/*begin::Dashboard*/}
      {/*begin::Row*/}
      <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
        <div className="row">
          <div className="col-md-7 table-container">
            <div className="table-content">
              <table className="table">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="role-name">ADMIN</th>
                    <th scope="col" className="role-company">COUNTRY</th>
                    <th scope="col" className="role-status">STATUS</th>
                    <th scope="col" className="role-create">CREATED AT</th>
                    <th scope="col" className="role-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    XP Eats
                    </td>
                    <td className="user-company">Canada</td>
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
                    Door Bud
                    </td>
                    <td className="user-company">Canada</td>
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
                    Jimmy
                    </td>
                    <td className="user-company">Canada</td>
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
                    Comfort
                    </td>
                    <td className="user-company">Canada</td>
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
                    XP Eats
                    </td>
                    <td className="user-company">Canada</td>
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
                    Comfort
                    </td>
                    <td className="user-company">Canada</td>
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
          <div className="col-md-5">
            <div className="vehicle-info">
              <div className="form-group">
                <label>Country</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Pakistan">Pakistan</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div className="form-group">
                <label>City</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                </select>
              </div>
              <div className="form-group">
                <label>Fleet</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Fleet1">Fleet 1</option>
                  <option value="Fleet2">Fleet 2</option>
                </select>
              </div>
              <div className="form-group">
                <label>Fleet Service Fees</label>
                <div className="input-with-label">
                  <input type="text" name="admin service" className="form-control" placeholder="Service Fees" />
                  <span>%</span>
                </div>
              </div>
              <div className="form-group">
                <label>Fleet Referral Fees</label>
                <div className="input-with-label">
                  <input type="text" name="admin service" className="form-control" placeholder="2nd Rider Amount" />
                  <span>%</span>
                </div>
              </div>
              <div className="form-group">
                <label>Apply Additional Fee</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="add-document-btn mt-0 mb-15">
                <button type="button" className="submit-btn"
                  onClick={()=>navigate(PRIVATE_ROUTES.dashboard.path)}
                >SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default feesManagement;
