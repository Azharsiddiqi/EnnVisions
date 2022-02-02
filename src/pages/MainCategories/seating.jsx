import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ACTION_addSeating,
  ACTION_getSeating,
  ACTION_updateSeating,
  ACTION_deleteSeating,
  ACTION_updateSeatingSetup,
  ACTION_getSeatingSetup,
} from '../../store/mainCategory/actions';
import Modal from '../../components/confirmationAlert';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import _ from 'lodash';

const seating = () => {
  const dispatch = useDispatch();
  const { seating,seatingItems } = useSelector((state) => state.mainCategory);
  // begin item states
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemStatus, setItemStatus] = useState(1); // 0 mean false and 1 mean true
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [editItemName, setEditItemName] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [editItemStatus, setEditItemStatus] = useState(1); // 0 mean false and 1 mean true
  const [show, setShow] = useState(false);
  // Starting seating Service states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDisplayTitle, setIsDisplayTitle] = useState(false);
  const [isDisplayDescription, setIsDisplayDescription] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [isMultipleSelection, setIsMultipleSelection] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [status, setStatus] = useState(1);

  const handleShow = (_item) => {
    setDeleteItem(_item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setDeleteItem(null);
  };
  const resetItem = () => {
    setItemName('');
    setItemDescription('');
    setItemStatus(1);
  };
  const resetEditItem = () => {
    setEditItem(null);
    setEditItemName('');
    setEditItemDescription('');
    setEditItemStatus(1);
  };

  const addNewItemHandler = () => {
    if (!itemName || itemName === '') return;
    const reqPacket = {
      title: itemName,
      description: itemDescription,
      status: itemStatus === 1 ? true : false,
    };
    dispatch(ACTION_addSeating(reqPacket));
    resetItem();
  };
  const updateItemHandler = (e) => {
    e.preventDefault();
    if (
      !editItem ||
      !editItemName ||
      editItemName === '' ||
      (editItem.title === editItemName &&
        editItem.description === editItemDescription &&
        ((editItem.status === true && editItemStatus === 1) ||
          (editItem.status === false && editItemStatus === 0)))
    )
      return;

    const reqPacket = {
      id: editItem.id,
      title: editItemName,
      description: editItemDescription,
      status: editItemStatus === 1 ? true : false,
    };
    dispatch(ACTION_updateSeating(reqPacket));
    resetEditItem();
  };

  const deleteItemHandler = () => {
    if (!deleteItem) return;
    const reqPacket = {
      id: deleteItem.id,
    };
    dispatch(ACTION_deleteSeating(reqPacket));
    setShow(false);
    setDeleteItem(null);
  };
  const editButtonHandler = (_item) => {
    setEditItem(_item);
    setEditItemName(_item.title);
    setEditItemDescription(_item.description);
    setEditItemStatus(_item.status === true ? 1 : 0);
  };
  const updateSeatingHandler = () => {
    if (!title) return;

    const dtoSeatingOption = [];
    seatingItems.forEach((_item) => {
      dtoSeatingOption.push({
        id: _item.id,
      });
    });

    const reqPacket = {
      dtoSeatingOption,
      title,
      description,
      isDisplayTitle,
      isDisplayDescription,
      isDropdown,
      isCheckBox,
      isMultipleSelection,
      isRequired,
    };

    dispatch(ACTION_updateSeatingSetup(reqPacket));
  };

  useEffect(() => {
    dispatch(ACTION_getSeating());
    dispatch(ACTION_getSeatingSetup());
    // eslint-disable-next-line
  }, []);



  useEffect(() => {
    if( !_.isEmpty(seating) ) {
      setTitle(seating.title);
      setDescription(seating.description);
      setIsDisplayTitle(seating.isDisplayTitle);
      setIsDisplayDescription(seating.isDisplayDescription);
      setIsDropdown(seating.isDropdown);
      setIsCheckBox(seating.isCheckBox);
      setIsMultipleSelection(seating.isMultipleSelection);
      setIsRequired(seating.isRequired);
      setStatus(1);
          
    }
  }, [seating]);

  return (
    <div>
      <Modal
        show={show}
        description={`Do you want to delete "${deleteItem?.title}" item!`}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Main Categories Details"
                    defaultValue={''}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    value={status}
                    onChange={(e) => setStatus(Number(e.target.value))}
                  >
                    <option value={1}>Active</option>
                    <option value={0}>In active</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">Display Title</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isDisplayTitle}
                          onChange={() => setIsDisplayTitle(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isDisplayTitle}
                          onChange={() => setIsDisplayTitle(false)}
                        />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <label className="r-u-owner who-serve">
                      Display Description
                    </label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isDisplayDescription}
                          onChange={() => setIsDisplayDescription(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isDisplayDescription}
                          onChange={() => setIsDisplayDescription(false)}
                        />
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
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isDropdown}
                          onChange={() => setIsDropdown(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isDropdown}
                          onChange={() => setIsDropdown(false)}
                        />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Check Box</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isCheckBox}
                          onChange={() => setIsCheckBox(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isCheckBox}
                          onChange={() => setIsCheckBox(false)}
                        />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">
                      Multiple Selection
                    </label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isMultipleSelection}
                          onChange={() => setIsMultipleSelection(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isMultipleSelection}
                          onChange={() => setIsMultipleSelection(false)}
                        />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-10">
                    <label className="r-u-owner who-serve">Required</label>
                    <div className="row c-vendor-checboxes">
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={isRequired}
                          onChange={() => setIsRequired(true)}
                        />
                        <span />
                        Active
                      </label>
                      <label className="plain-check checkbox checkbox-lg bg-check col-xl-6">
                        <input
                          type="checkbox"
                          name="Checkboxes3_1"
                          checked={!isRequired}
                          onChange={() => setIsRequired(false)}
                        />
                        <span />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>

                <div className="creat-main-category-submit  mt-5">
                  <button
                    className="btn"
                    type="button"
                    onClick={updateSeatingHandler}
                  >
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
                      {seatingItems && seatingItems.length
                        ? seatingItems.map((item,index) =>
                          editItem && editItem.id === item.id ? (
                            <tr key={index}>
                              <td className="pg-14-id">{item.id}</td>
                              <td className="pg-14-name">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Item name"
                                    className="form-control"
                                    value={editItemName}
                                    onChange={(e) =>
                                      setEditItemName(e.target.value)
                                    }
                                  />
                                </div>
                              </td>
                              <td className="pg-14-name">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Details"
                                    className="form-control"
                                    value={editItemDescription}
                                    onChange={(e) =>
                                      setEditItemDescription(e.target.value)
                                    }
                                  />
                                </div>
                              </td>
                              <td className="pg-14-name">
                                <div className="form-group">
                                  <select
                                    className="form-control"
                                    value={editItemStatus}
                                    onChange={(e) =>
                                      setEditItemStatus(
                                        Number(e.target.value),
                                      )
                                    }
                                  >
                                    <option value={1}>ACTIVE</option>
                                    <option value={0}>IN-ACTIVE</option>
                                  </select>
                                </div>
                              </td>
                              <td className="td-action-icon">
                                <DropdownButton
                                  id="dropdown-basic-button"
                                  title="Actions"
                                >
                                  <Dropdown.Item onClick={updateItemHandler}>
                                    Update
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={(e) => {
                                      e.preventDefault();
                                      resetEditItem();
                                    }}
                                  >
                                    Cancel
                                  </Dropdown.Item>
                                </DropdownButton>
                              </td>
                            </tr>
                          ) : (
                            <tr key={index}>
                              <td className="pg-14-id">
                                <b>{item.id}</b>
                              </td>
                              <td className="pg-14-name">{item.title}</td>
                              <td className="pg-14-name">
                                {item.description}
                              </td>
                              <td className="pg-14-name">
                                {item.status ? 'ACTIVE' : 'IN ACTIVE'}{' '}
                              </td>
                              <td className="td-action-icon">
                                <span
                                  onClick={() => handleShow(item)}
                                  className="del-icon cursor-class"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  <img
                                    src="/assets/images/new-delete.svg"
                                    alt=""
                                  />
                                </span>
                                <span
                                  className="ic-edit cursor-class"
                                  onClick={() => editButtonHandler(item)}
                                >
                                  <img
                                    src="/assets/images/new-edit.svg"
                                    alt=""
                                  />
                                </span>
                              </td>
                            </tr>
                          ),
                        )
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
                              onChange={(e) =>
                                setItemDescription(e.target.value)
                              }
                            />
                          </div>
                        </td>
                        <td className="pg-14-name">
                          <div className="form-group">
                            <select
                              className="form-control"
                              value={itemStatus}
                              onChange={(e) =>
                                setItemStatus(Number(e.target.value))
                              }
                            >
                              <option value={1}>ACTIVE</option>
                              <option value={0}>IN-ACTIVE</option>
                            </select>
                          </div>
                        </td>
                        <td className="td-action-icon">
                          <span
                            onClick={addNewItemHandler}
                            className="plus-sign cursor-class"
                          >
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

export default seating;