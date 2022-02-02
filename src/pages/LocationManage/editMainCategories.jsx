import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';


const editMainCategories=()=> {

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
        <div className="row">
          <div className="dash-body">
            <div className="page-3-table">
              <div className="tab-container">
                <div className="tabs-con">
                  <span className="active-tab">VENDOR</span>
                  <span>OUTLETS</span>
                  <span>USER</span>
                  <span>DRIVER</span>
                  <span>WAITER</span>
                </div>
                <button className="made-inactive" onClick={handleShow}>MAGE INACTIVE?</button>
              </div>
              <table className="table main-categories-list">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-id">ID</th>
                    <th scope="col" className="role-name">FULL NAME</th>
                    <th scope="col" className="role-name">EARNING</th>
                    <th scope="col" className="counter-td">COMMISSION</th>
                    <th scope="col" className="counter-td">TAX</th>
                    <th scope="col" className="counter-td">TOTAL</th>
                    <th scope="col" className="role-create">CREATED AT</th>
                    <th scope="col" className="role-rating">RATING</th>
                    <th scope="col" className="counter-td">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
                    </td>
                  </tr>
                  <tr>
                    <td className="user-id">
                  1
                    </td>
                    <td scope="row" className="user-name-td">
                  ADNAN QURESHI
                    </td>
                    <td className="user-email">5500.00</td>
                    <td className="user-number">500.00</td>
                    <td className="user-status">50.00</td>
                    <td className="user-status">5550.00</td>
                    <td className="create-at">13-August-2020</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="active-text">
                  ACTIVE
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

export default editMainCategories;