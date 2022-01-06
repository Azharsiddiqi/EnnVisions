import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ACTION_addHouseDelivery,
  ACTION_getHouseDelivery,
  ACTION_deleteHouseDeliveryOption,
} from '../../store/mainCategory/actions';
import Modal from '../../components/confirmationAlert';

export default () => {
  const dispatch = useDispatch();
  const {houseDeliveryServiceItems} = useSelector((state) => state.mainCategory);
  // begin item states
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemStatus, setItemStatus] = useState(1); // 0 mean false and 1 mean true
  const [deleteItem, setDeleteItem] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (_item) => {
    setDeleteItem(_item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setDeleteItem(null);
  };
  const addNewItemHandler = () => {
    if (!itemName || itemName === '') return;
    const reqPacket = {
      name: itemName,
      description: itemDescription,
      status: itemStatus === 1 ? true : false,
    };
    dispatch(ACTION_addHouseDelivery(reqPacket));
  };

  const deleteItemHandler = () => {
    if (!deleteItem) return;
    const reqPacket = {
      id: deleteItem.id,
    };
    dispatch(ACTION_deleteHouseDeliveryOption(reqPacket));
    setShow(false);
    setDeleteItem(null);
  };

  useEffect(() => {
    dispatch(ACTION_getHouseDelivery());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Modal
        show={show}
        description={`Do you want to delete "${deleteItem?.name}" item!`}
        handleSave={deleteItemHandler}
        handleClose={handleClose}
      />
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          {/*begin::Dashboard*/}
          {/*begin::Row*/}
          <div className="add-edit-role dash-body create_main_categories">
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Main Categories name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Main Categories Details"
                    defaultValue={''}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option value="Active">Active</option>
                    <option value="in-active">In active</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">Display Title</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">Display Description</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Dropdown</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Check Box</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Multiple Selection</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Required</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input type="checkbox" name="Checkboxes3_1" />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="creat-main-category-submit  mt-5">
                  <button className="btn" type="button">
                    UPDATE
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="table-container">
                  <div className="btn-inactive">
                    <button className="btn" type="button">
                      MADE INACTIVE?
                    </button>
                  </div>
                  <table className="table">
                    <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th scope="col" className="pg-14-id">
                          ID
                        </th>
                        <th scope="col" className="pg-14-full-name">
                          ITEM NAME
                        </th>
                        <th scope="col" className="pg-14-rest-name">
                          DETAILS
                        </th>
                        <th scope="col" className="pg-14-status">
                          STATUS
                        </th>
                        <th scope="col" className="pg-14-action">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {houseDeliveryServiceItems && houseDeliveryServiceItems.length
                        ? houseDeliveryServiceItems.map((item) => (
                            <tr>
                              <td className="pg-14-id">
                                <b>{item.id}</b>
                              </td>
                              <td className="pg-14-name">{item.name}</td>
                              <td className="pg-14-name">{item.description}</td>
                              <td className="pg-14-name">
                                {item.status ? 'ACTIVE' : 'IN ACTIVE'}{' '}
                              </td>
                              <td className="td-action-icon">
                                <span
                                  onClick={() => handleShow(item)}
                                  className="del-icon cursor-class"
                                  data-toggle="modal"
                                  data-target="#exampleModal">
                                  <img src="assets/images/new-delete.svg" alt="" />
                                </span>

                                <span className="ic-edit">
                                  <img src="assets/images/new-edit.svg" alt="" />
                                </span>
                              </td>
                            </tr>
                          ))
                        : ''}

                      <tr>
                        <td className="pg-14-id"></td>
                        <td className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Item name"
                              className="form-control"
                              value={itemName}
                              onChange={(e) => setItemName(e.target.value)}
                            />
                          </div>
                        </td>
                        <td className="pg-14-name">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Details"
                              className="form-control"
                              value={itemDescription}
                              onChange={(e) => setItemDescription(e.target.value)}
                            />
                          </div>
                        </td>
                        <td className="pg-14-name">
                          <div className="form-group">
                            <select
                              className="form-control"
                              value={itemStatus}
                              onChange={(e) => setItemStatus(Number(e.target.value))}>
                              <option value={1}>ACTIVE</option>
                              <option value={0}>IN-ACTIVE</option>
                            </select>
                          </div>
                        </td>
                        <td className="td-action-icon">
                          <span onClick={addNewItemHandler} className="plus-sign cursor-class">
                            + Add
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
