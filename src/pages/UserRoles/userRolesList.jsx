import React, {useState} from 'react';
import ConfirmationAlert from '../../components/confirmationAlert';

export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex flex-column-fluid">
      <ConfirmationAlert
        show={show}
        description={
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
        handleSave={handleClose}
        handleClose={handleClose}
      />
      {/* begin::Container */}
      <div className=" container ">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="row">
          <div className="dash-body">
            <div className="page-3-table">
              <table className="table">
                <thead className="user-thead gilroy-semibold">
                  <tr>
                    <th scope="col" className="role-type">
                      ROLE TYPE
                    </th>
                    <th scope="col" className="role-detail">
                      ROLE DETAIL
                    </th>
                    <th scope="col" className="role-comm">
                      COMMISSION
                    </th>
                    <th scope="col" className="role-action">
                      RATING
                    </th>
                    <th scope="col" className="role-action">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/001-boy.svg" alt="" />
                      <span className="user-name">SUPER ADMIN</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button onClick={handleShow} type="button" className="btn btn-active">
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/018-girl-9.svg" alt="" />
                      <span className="user-name">ADMIN</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button type="button" className="btn btn-de-active">
                        DEACTIVE
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/035-boy-15.svg" alt="" />
                      <span className="user-name">FLEET</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button type="button" className="btn btn-active">
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/001-boy.svg" alt="" />
                      <span className="user-name">VENDOR</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button type="button" className="btn btn-active">
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/018-girl-9.svg" alt="" />
                      <span className="user-name">LOCATION MANAGER</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button type="button" className="btn btn-active">
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-p">
                      <img src="assets/images/035-boy-15.svg" alt="" />
                      <span className="user-name">DATA ANALYST</span>
                    </td>
                    <td className="user-message">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod
                    </td>
                    <td className="comm-percentage">1%</td>
                    <td className="rating">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </td>
                    <td className="action-btn">
                      <button type="button" className="btn btn-active">
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
