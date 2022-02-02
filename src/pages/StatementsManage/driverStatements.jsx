import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
import ConfirmationAlert from '../../components/confirmationAlert';

const driverStatements = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <div>
    <div className="d-flex flex-column-fluid">
      <ConfirmationAlert
        show={show}
        description={
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
        handleSave={handleClose}
        handleClose={handleClose}
      />
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
                      <th scope="col" className="role-name">DRIVER</th>
                      <th scope="col" className="role-name">DELIVER</th>
                      <th scope="col" className="second-referrer">CANCEL</th>
                      <th scope="col" className="role-company">IN PROGRESS</th>
                      <th scope="col" className="role-company">VENDOR EARN</th>
                      <th scope="col" className="role-company">G.S. TAX</th>
                      <th scope="col" className="role-company">ADMIN PAYOUT</th>
                      <th scope="col" className="role-company">FLEET PAYOUT</th>
                      <th scope="col" className="role-company">RATINGS</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-status">ORDER STATUS</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}  />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                        <a href="#">Arslan Ahsan</a>
                      </td>
                      <td className="user-company">25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$25.25</td>
                      <td className="user-company">$40.25</td>
                      <td className="user-company">$3.30</td>
                      <td className="user-company">Pending</td>
                      <td className="user-company">Available</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="ratings">
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                        <img src="assets/images/ic_star_yellow.svg" />
                      </td>
                      <td className="user-company active-color">Active</td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                          <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.overAllStatements.path)} />
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
export default driverStatements;
