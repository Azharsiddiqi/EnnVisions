import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';



const overAllStatements= () => {
  const navigate = useNavigate();
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
                      <th scope="col" className="role-name">ORDER ID</th>
                      <th scope="col" className="role-name">ADMIN NAME</th>
                      <th scope="col" className="second-referrer">AGENT NAME</th>
                      <th scope="col" className="role-company">VENDOR NAME</th>
                      <th scope="col" className="role-company">OUT LET NAME</th>
                      <th scope="col" className="role-status">LOCATION ADDRESS</th>
                      <th scope="col" className="role-create">HELPER NAME</th>
                      <th scope="col" className="role-action">USER NAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr  onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
                      </td>
                    </tr>
                    <tr onClick={()=>navigate(PRIVATE_ROUTES.statementsManage.statementsDetail.path)}>
                      <td className="user-id">1</td>
                      <td scope="row" className="user-name-td">
                    #00001
                      </td>
                      <td className="user-company">
                        <a href="#">XP EATs</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="user-company">
                        <a href="#">$3.00</a>
                      </td>
                      <td className="user-company">
                        <a href="#">Starbucks (G-10 Islamabad)</a>
                      </td>
                      <td className="user-number">
                    7250 Keele St, Concord, ON L4K 1Z8, Canada
                      </td>
                      <td className="create-at">
                        <a href="#">Adnan Qureshi</a>
                      </td>
                      <td className="action-btn">
                        <a href="#">Zeeshan Zaheer</a>
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
export default overAllStatements;
