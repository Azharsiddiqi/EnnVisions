import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';


const  menuVendorOutlets = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="add-edit-role dash-body create_main_categories vehicle-type-container">
            <div className="row">
              <div className="col-12 table-container review-vendor">
                <div className="page-14-table">
                  <table className="table">
                    <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th scope="col" className="pg-14-id">ID</th>
                        <th scope="col" className="pg-14-full-name">VENDOR NAME</th>
                        <th scope="col" className="pg-14-email">OUTLET NAME</th>
                        <th scope="col" className="pg-14-phone">MENU NAME</th>
                        <th scope="col" className="pg-14-status">STATUS</th>
                        <th scope="col" className="pg-14-created">CREATED AT</th>
                        <th scope="col" className="pg-14-action">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="col" className="pg-14-id"><b>1</b></td>
                        <td scope="col" className="pg-14-name">Adnan Qureshi</td>
                        <td scope="col" className="pg-14-name">Pizza Hunt</td>
                        <td scope="col" className="pg-14-name">Breakfast Sandwiches and Burritos</td>
                        <td scope="col" className="pg-14-name review-info">
                          <button className="btn" type="button">REVIEW INFO</button>
                        </td>
                        <td scope="col" className="pg-14-name">13-August-2020</td>
                        <td scope="col" className="td-action-icon">
                          
                          <span className="preparation-t">
                            <img src="assets/images/ic_prepration_time.svg"  alt='' onClick={()=> navigate(PRIVATE_ROUTES.menuManage.outLetsSchedulePreparation.path)}/>
                          </span>
                          
                          <span className="item-list">
                            <img src="assets/images/ic_item_list.svg"  alt='' />
                          </span>
                          <span className="ic-schedule" data-toggle="modal" data-target="#exampleModal">
                            <img src="assets/images/ic_schedule.svg"  alt='' />
                          </span>
                          {/* Modal */}
                          <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header review-vendor-modal-outlet">
                                  <h5 className="modal-title" id="exampleModalLabel">MANAGE OPEN TIME</h5>
                                  <div className="status-check-btn ml-auto">
                                    <button className="approve-btn" type="button">APPROVE</button>
                                    <button className="reject-btn" type="button">REJECT</button>
                                    <button className="resubmit-btn" type="button">RESUBMIT</button>
                                  </div>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="page-6-table">
                                    <div className="table-content">
                                      <table className="table referal-list-table review-vendor-modal mt-5">
                                        <thead className="user-thead gilroy-semibold">
                                          <tr>
                                            <th scope="col" className="role-id">ID</th>
                                            <th scope="col" className="role-name">DAY</th>
                                            <th scope="col" className="role-name">OPEN TIME</th>
                                            <th scope="col" className="second-referrer">CLOSE TIME</th>
                                            <th scope="col" className="role-status">STATUS</th>
                                            <th scope="col" className="role-action">ACTION</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="user-id">1</td>
                                            <td scope="row" className="user-name-td">
                                        MONDAY
                                            </td>
                                            <td className="user-company">8:00 AM</td>
                                            <td className="user-company">10:00 PM</td>
                                            <td className="user-company">ACTIVE</td>
                                            <td className="action-btn">
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" />
                                                <span />
                                          Yes
                                              </label>
                                              <label className="plain-check checkbox checkbox-lg">
                                                <input type="checkbox" name="Checkboxes3_1" defaultChecked />
                                                <span />
                                          No
                                              </label>
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
                        
                        </td>
                      </tr>
                      <tr>
                        <td scope="col" className="pg-14-id"><b>1</b></td>
                        <td scope="col" className="pg-14-name">ADNAN QURESHI</td>
                        <td scope="col" className="pg-14-name">McDonald's (Keele &amp; Finch)</td>
                        <td scope="col" className="pg-14-name">Snacks &amp; Sides</td>
                        <td scope="col" className="pg-14-name active-btn">
                          <button className="btn" type="button">ACTIVE</button>
                        </td>
                        <td scope="col" className="pg-14-name">13-August-2020</td>
                        <td scope="col" className="td-action-icon">
                          
                          <span className="preparation-t">
                            <img src="assets/images/ic_prepration_time.svg"  alt='' onClick={()=> navigate(PRIVATE_ROUTES.menuManage.outLetsSchedulePreparation.path)} />
                          </span>
                          
                          <span className="item-list">
                            <img src="assets/images/ic_item_list.svg"  alt='' />
                          </span>
                          <span className="ic-schedule" data-toggle="modal" data-target="#exampleModal">
                            <img src="assets/images/ic_schedule.svg"  alt='' />
                          </span>
                          {/* Modal */}
                          <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">MANAGE OPEN TIME</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="page-6-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={30}>30 min</option>
                                                <option value={40}>40 min</option>
                                                <option value={50}>50 min</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={8}>8:00 AM</option>
                                                <option value={9}>9:00 AM</option>
                                                <option value={10}>10:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={11}>11:00 AM</option>
                                                <option value={9}>12:00 AM</option>
                                                <option value={10}>1:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <button type="button" className="inactive-btn">INACTIVE</button>
                                          </td>
                                          <td>
                                            <span className="delete-icon">
                                              <img src="assets/images/new-delete.svg"  alt='' />
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={30}>30 min</option>
                                                <option value={40}>40 min</option>
                                                <option value={50}>50 min</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={8}>12:00 AM</option>
                                                <option value={9}>9:00 AM</option>
                                                <option value={10}>10:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={11}>12:00 AM</option>
                                                <option value={9}>12:00 AM</option>
                                                <option value={10}>1:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <button type="button" className="active-btn">INACTIVE</button>
                                          </td>
                                          <td>
                                            <span className="delete-icon">
                                              <img src="assets/images/new-delete.svg"  alt='' />
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={30}>30 min</option>
                                                <option value={40}>40 min</option>
                                                <option value={50}>50 min</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={12}>12:00 AM</option>
                                                <option value={9}>9:00 AM</option>
                                                <option value={10}>10:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={12}>12:00 AM</option>
                                                <option value={9}>12:00 AM</option>
                                                <option value={10}>1:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <button type="button" className="active-btn">INACTIVE</button>
                                          </td>
                                          <td>
                                            <span className="delete-icon">
                                              <img src="assets/images/new-delete.svg"  alt='' />
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={30}>30 min</option>
                                                <option value={40}>40 min</option>
                                                <option value={50}>50 min</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value="Friday">Friday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={12}>12:00 AM</option>
                                                <option value={9}>9:00 AM</option>
                                                <option value={10}>10:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="form-group pg-6-time">
                                              <select className="form-control">
                                                <option value={12}>12:00 AM</option>
                                                <option value={9}>12:00 AM</option>
                                                <option value={10}>1:00 AM</option>
                                              </select>
                                            </div>
                                          </td>
                                          <td>
                                            <button type="button" className="inactive-btn">INACTIVE</button>
                                          </td>
                                          <td>
                                            <span className="delete-icon">
                                              <img src="assets/images/new-delete.svg"  alt='' />
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div className="modal-submit-btn">
                                      <button type="button" className="btn">SUBMIT</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                        </td>
                      </tr>
                      <tr className="active-btn-tr " >
                        <td colSpan={9} className="active-td">
                          <button type="button" className="btn made-active">MADE ACTIVE?</button>
                        </td>
                      </tr>
                      <tr className='transbox' >
                        
                        <td scope="col" className="pg-14-id"><b>1</b></td>
                        <td scope="col" className="pg-14-name">Adnan Qureshi</td>
                        <td scope="col" className="pg-14-name">Pizza Hunt</td>
                        <td scope="col" className="pg-14-name">Breakfast Sandwiches and Burritos</td>
                        <td scope="col" className="pg-14-name review-info">
                          <button className="btn" type="button">REVIEW INFO</button>
                        </td>
                        
                        <td scope="col" className="pg-14-name">13-August-2020</td>
                        <td scope="col" className="td-action-icon">
                          
                          <span className="preparation-t">
                            <img src="assets/images/ic_prepration_time.svg"  alt=''/>
                          </span>
                          
                          <span className="item-list">
                            <img src="assets/images/ic_item_list.svg"  alt='' />
                          </span>
                          <span className="ic-schedule"  >
                            <img src="assets/images/ic_schedule.svg"  alt='' />
                          </span>
                          
                        
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

    </div>
  );
};
export default menuVendorOutlets;