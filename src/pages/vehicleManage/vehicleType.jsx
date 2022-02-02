import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';


const vehicleType = () => {
  const navigate =  useNavigate();
  return <div>
    <div className="d-flex flex-column-fluid">
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
                      <th scope="col" className="role-name">VEHICLE NAME</th>
                      <th scope="col" className="role-company">IS FOR POOL</th>
                      <th scope="col" className="role-email">DELIVERY</th>
                      <th scope="col" className="role-status">STATUS</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                    EV Go
                      </td>
                      <td className="user-company">Yes</td>
                      <td className="user-email">Single</td>
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
                  <input type="text" name="document" className="form-control" placeholder="Vehicle type" />
                </div>
                <div className="row">
                  <div className="col-12 col-sm-5 p-sm-0">
                    <div className="form-group">
                      <label>Company name</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-10 col-sm-5 p-sm-0">
                    <div className="form-group">
                      <label>Vehicle Model</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-2 plus-btn-container">
                    <button className="plus-btn" type="button"
                      onClick={()=>navigate(PRIVATE_ROUTES.documentManage.documents.path)}
                    >+</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Is for Pool</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Select one">Select one</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Delivery type</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="COD">COD</option>
                    <option value="On-demand">On demand</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Active">Active</option>
                    <option value="in-active">In active</option>
                  </select>
                </div>
                <div className="add-document-btn mt-0 mb-15">
                  <button type="button" className="submit-btn" 
                    onClick={()=>navigate(PRIVATE_ROUTES.documentManage.documents.path)}
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
export default vehicleType;
