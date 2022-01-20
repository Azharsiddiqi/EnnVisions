import React, { useState } from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';

const helper = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
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
                      <th scope="col" className="role-id">ID</th>
                      <th scope="col" className="role-name">COUNTRY</th>
                      <th scope="col" className="role-name">STATE</th>
                      <th scope="col" className="role-phone">CITY</th>
                      <th scope="col" className="role-status">CATEGORY</th>
                      <th scope="col" className="role-status">VENDOR</th>
                      <th scope="col" className="role-status">OUTLETS</th>
                      <th scope="col" className="role-status">ORDER</th>
                      <th scope="col" className="role-create">CREATED AT</th>
                      <th scope="col" className="role-rating">RATING</th>
                      <th scope="col" className="role-action">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow}/>
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="user-id">
                  1
                      </td>
                      <td scope="row" className="user-name-td">
                  PAKISTAN
                      </td>
                      <td className="user-email">Punjab</td>
                      <td className="user-number">Restaurant</td>
                      <td className="user-status">15</td>
                      <td className="user-status">50</td>
                      <td className="user-status">50</td>
                      <td className="user-status">5089</td>
                      <td className="create-at">13-August-2020</td>
                      <td className="rating">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </td>
                      <td className="action-btn">
                        <div className="edit-delete-form">
                          <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
                          <img src="assets/images/ic_edit_white.svg" />
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
  );
};
export default helper;
