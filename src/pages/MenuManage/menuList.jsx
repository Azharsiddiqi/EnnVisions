import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
const menuList= () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
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
        <div className="row">
          <div className="dash-body">
            <div className="page-3-table">
              <table className="table">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="vendor-id">ID</th>
                    <th scope="col" className="vendor-name">COMPANY NAME</th>
                    <th scope="col" className="vendor-email">EMAIL</th>
                    <th scope="col" className="vendor-phone">PHONE</th>
                    <th scope="col" className="vendor-created">CREATED AT</th>
                    <th scope="col" className="vendor-outlet">OUTLET</th>
                    <th scope="col" className="vendor-rating">MENU ACTIVE</th>
                    <th scope="col" className="vendor-action">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="vendor-id">
                  1
                    </td>
                    <td scope="row" className="vendor-name-td">
                  PIZZA HUT
                    </td>
                    <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                    <td className="vendor-no">+923008134076</td>
                    <td className="vendor-created">13-August-2020</td>
                    <td className="vendor-outlet-t cursor-class" onClick={()=> navigate(PRIVATE_ROUTES.menuManage.menuVendorOutlets.path)}>
                      <span>TWO (2)</span>
                    </td>
                   
                    <td className="vendor-outlet-t cursor-class" onClick={()=> navigate(PRIVATE_ROUTES.menuManage.menuVendorOutlets.path)}>
                      <span>TWO (2)</span>
                    </td>
                      
                    <td className="action-btn">
                      <button type="button" className="btn review-btn">REVIEW INFO</button>
                    </td>
                  </tr>

                  <tr className="active-btn-tr " >
                    <td colSpan={9} className="active-td">
                      <button type="button" className="btn made-active">MADE ACTIVE?</button>
                    </td>
                  </tr>
                  <tr style={{    backgroundColor: 'rgb(248 249 251)'}} >
                    <td className="vendor-id">
                  1
                    </td>
                    <td scope="row" className="vendor-name-td">
                  PIZZA HUT
                    </td>
                    <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                    <td className="vendor-no">+923008134076</td>
                    <td className="vendor-created">13-August-2020</td>
                    <td className="vendor-outlet-t " >
                      <span>TWO (2)</span>
                    </td>
                   
                    <td className="vendor-outlet-t" >
                      <span>TWO (2)</span>
                    </td>
                   
                   
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
                        <img src="assets/images/new-edit.svg" className="edit" />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="vendor-id">
                  1
                    </td>
                    <td scope="row" className="vendor-name-td">
                  PIZZA HUT
                    </td>
                    <td className="vendor-email">adnan.ahsan21@gmail.com</td>
                    <td className="vendor-no">+923008134076</td>
                    <td className="vendor-created">13-August-2020</td>
                    <td className="vendor-outlet-t cursor-class" onClick={()=> navigate(PRIVATE_ROUTES.menuManage.menuVendorOutlets.path)}>
                      <span>TWO (2)</span>
                    </td>
                   
                    <td className="vendor-outlet-t cursor-class" onClick={()=> navigate(PRIVATE_ROUTES.menuManage.menuVendorOutlets.path)}>
                      <span>TWO (2)</span>
                    </td>
                   
                   
                    <td className="action-btn">
                      <div className="edit-delete-form">
                        <img src="assets/images/new-delete.svg" className="delete" onClick={handleShow} />
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

  </div>;
};

export default menuList;