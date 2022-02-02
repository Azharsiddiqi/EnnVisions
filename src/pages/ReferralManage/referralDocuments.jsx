import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

const referralDocuments = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div><div className="d-flex flex-column-fluid">
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
              <table className="table referal-list-table">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="role-name">FULL NAME</th>
                    <th scope="col" className="role-name">REFERRER NAME</th>
                    <th scope="col" className="second-referrer">2ND REFERRER NAME</th>
                    <th scope="col" className="role-company">EARNED</th>
                    <th scope="col" className="role-company">PENDING</th>
                    <th scope="col" className="role-status">STATUS</th>
                    <th scope="col" className="role-create">CREATED AT</th>
                    <th scope="col" className="role-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Alberta</td>
                    <td className="user-company">Business Id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">British Columbia</td>
                    <td className="user-company">Insurance Document</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Manitoba</td>
                    <td className="user-company">Business Id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">New Brunswick</td>
                    <td className="user-company">Govt. Approval Do...</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Newfoundland</td>
                    <td className="user-company">Tax id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Islamabad</td>
                    <td className="user-company">Business Id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Punjab</td>
                    <td className="user-company">Business Id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">California</td>
                    <td className="user-company">Driver Id</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Pennsylvania</td>
                    <td className="user-company">Vehicle Document</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Pennsylvania</td>
                    <td className="user-company">Vehicle Document</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Pennsylvania</td>
                    <td className="user-company">Vehicle Document</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">1</td>
                    <td scope="row" className="user-name-td">
                    Canada
                    </td>
                    <td className="user-company">Pennsylvania</td>
                    <td className="user-company">Vehicle Document</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-company">$3.00</td>
                    <td className="user-number">
                      <button className="btn active-btn">ACTIVE</button>
                    </td>
                    <td className="create-at">13-August-2020</td>
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow}/>
                        <img src="assets/images/new-edit.svg" className="edit" onClick={()=>navigate(PRIVATE_ROUTES.referralManage.referralEdit.path)}  />
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
export default referralDocuments;
