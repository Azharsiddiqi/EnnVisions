import React from 'react';

const reasonDetails = () => {
  return <div><div className="d-flex flex-column-fluid">
    {/*begin::Container*/}
    <div className=" container ">
      {/*begin::Dashboard*/}
      {/*begin::Row*/}
      <div className="add-edit-role dash-body create_main_categories vehicle-type-container ad-cancel-reason">
        <div className="row">
          <div className="col-md-7 table-container">
            <div className="table-content">
              <table className="table ad-cancel-reason">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="role-name">SUB TITLE</th>
                    <th scope="col" className="role-status">STATUS</th>
                    <th scope="col" className="role-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                    ADNAN QURESHI
                    </td>
                    <td className="status-td">ACTIVE</td>
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
                <label>Assign to</label>
                <input type="text" name="assign" className="form-control" placeholder="Admin" defaultValue="Admin" />
              </div>
              <div className="form-group">
                <label>Sub-Title</label>
                <input type="text" name="assign" className="form-control" placeholder="Enter sub-title" defaultValue="Enter sub-title" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Add Description" defaultValue={'Add Description'} />
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 custom-p">
                  <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option value="Active">Active</option>
                      <option value="in-active">In active</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-sm-6 pr-0 custom-p">
                  <div className="form-group">
                    <label>Penalty</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option value="Active">Active</option>
                      <option value="in-active">In active</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 custom-p ad-cancel-reason-label">
                  <div className="form-group">
                    <div className="input-with-label">
                      <input type="text" name="admin service" className="form-control" placeholder={50} />
                      <span>$</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 custom-p pr-0 ad-cancel-reason-label">
                  <div className="form-group">
                    <div className="input-with-label">
                      <input type="text" name="admin service" className="form-control" placeholder={10} />
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default reasonDetails;
