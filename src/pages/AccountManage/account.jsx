import React from 'react';

const account = () => {
  return <div>
    <div className="d-flex flex-column-fluid">
      {/*begin::Container*/}
      <div className=" container ">
        {/*begin::Dashboard*/}
        {/*begin::Row*/}
        <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
          <div className="row">
            <div className="col-12 table-container">
              <div className="table-content">
                <div className="overall-statement-container">
                  <span className="statement-block c-green">
                    <p>TOTAL AMOUNT RECEIVED</p>
                    <p>$2000.00</p>
                  </span>
                  <span className="statement-block dark-green">
                    <p>TOTAL EARNINGS</p>
                    <p>$2000.00</p>
                  </span>
                  <span className="statement-block comp-order">
                    <p>COMPLETED ORDER</p>
                    <p>80</p>
                  </span>
                  <span className="statement-block in-progress">
                    <p>IN PROGRESS ORDER</p>
                    <p>80</p>
                  </span>
                  <span className="statement-block cancel-order">
                    <p>CANCELED ORDER</p>
                    <p>10</p>
                  </span>
                  <span className="statement-block ad-com">
                    <p>ADMISSION COMMISSIONS</p>
                    <p>10</p>
                  </span>
                  <span className="statement-block fleet-com">
                    <p>FLEET COMMISSIONS</p>
                    <p>10</p>
                  </span>
                </div>
                <table className="table overall-statement">
                  <thead className="user-thead gilroy-semibold">
                    <tr>
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">FULL NAME</th>
                      <th scope="col" className="role-name">EMAIL</th>
                      <th scope="col" className="second-referrer">EARNED</th>
                      <th scope="col" className="role-company">AVAILABLE</th>
                      <th scope="col" className="role-company">G.S. TAX</th>
                      <th scope="col" className="role-company">PAYOUT</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-status">STATUS</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
                        <a href="#">ADNAN QURESHI</a>
                      </td>
                      <td className="user-company">adnan.ahsan21@gmail.com</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">$0.30</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="user-company active-color">Active</td>
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
          </div>
        </div>   		
      </div>
    </div>

  </div>;
};
export default account;
