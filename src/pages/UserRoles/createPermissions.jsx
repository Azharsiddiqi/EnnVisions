import React, { useEffect, useState } from 'react';
// import { PRIVATE_ROUTES } from '../../config';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ACTION_getAllPermissions,
  ACTION_updatePermissionsList,
  ACTION_createPermissionList} from '../../store/userRoles/actions';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const createPermissions = () => {
 
  const dispatch = useDispatch();
  const {userPermissions} = useSelector(
    (state) => state.userRoles,
  );
  useEffect(() => {
    dispatch(ACTION_getAllPermissions());
    // eslint-disable-next-line
  }, []);


  const [editItem, setEditItem] = useState(null);
  const [editItemName, setEditItemName] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [editItemStatus, setEditItemStatus] = useState(1); // 0 mean false and 1 mean true
 

  const resetEditItem = () => {
    setEditItem(null);
    setEditItemName('');
    setEditItemDescription('');
    setEditItemStatus(1);
  };
  const editButtonHandler = (_item) => {
    setEditItem(_item);
    setEditItemName(_item.name);
    setEditItemDescription(_item.description);
    setEditItemStatus(_item.status === true ? 1 : 0);
  };


  const updateItemHandler = (e) => {
    e.preventDefault();
    if (
      !editItem ||
      !editItemName ||
      editItemName === '' ||
      (editItem.name === editItemName &&
        editItem.description === editItemDescription &&
        ((editItem.status === true && editItemStatus === 1) ||
          (editItem.status === false && editItemStatus === 0)))
    )
      return;

    const reqPacket = {
      id: editItem.id,
      name: editItemName,
      description: editItemDescription,
      status: editItemStatus === 1 ? true : false,
    };
    dispatch(ACTION_updatePermissionsList(reqPacket));
    resetEditItem();
  };

  
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemStatus, setItemStatus] = useState(1); // 0 mean false and 1 mean true
  

  const resetItem =()=>{
    setItemName('');
    setItemDescription('');
    setItemStatus(1);

  };

  const addNewItemHandler = () => {
    console.log('checking i am here');
    if (!itemName || itemName === '') return;
    const reqPacket = {
      name: itemName,
      description: itemDescription,
      status: itemStatus === 1 ? true : false,
    };
    dispatch(ACTION_createPermissionList(reqPacket));
    resetItem();
  };


  return (
    <div>
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
                    placeholder="Item Name "
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
               
                <div className="form-group">
                  <textarea className="form-control"
                    placeholder="Main Categories Details"
                    defaultValue={''}
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)} />
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    value={itemStatus}
                    onChange={(e) => setItemStatus(Number(e.target.value))}
                  >
                    <option value={1}>ACTIVE</option>
                    <option value={0}>IN ACTIVE</option>
                  </select>
                </div>

                <div className="add-document-btn mt-5">
                  <button
                    type="button"
                    className="submit-btn cursor-class"
                    onClick={addNewItemHandler}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="table-container">
                  <table className="table">
                    <thead className="user-thead gilroy-semibold">
                      <tr>
                        <th className="pg-14-id">ID</th>
                        <th className="pg-14-full-name">ITEM NAME</th>
                        <th className="pg-14-rest-name">DETAILS</th>
                        <th className="pg-14-status">STATUS</th>
                        <th className="pg-14-action">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userPermissions && userPermissions.length ?
                        (
                          userPermissions.map((item, index) =>

                            editItem && editItem.id === item.id ? (
                              <tr key={index}>
                                <th className="pg-14-id">{index + 1}</th>
                                <th className="pg-14-name">
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
                                </th>
                                <th className="pg-14-name">
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
                                </th>
                                <th className="pg-14-name">
                                  <div className="form-group">
                                    <select
                                      className="form-control"
                                      value={editItemStatus}
                                      onChange={(e) =>
                                        setEditItemStatus(Number(e.target.value))
                                      }
                                    >
                                      <option value={1}>ACTIVE</option>
                                      <option value={0}>IN-ACTIVE</option>
                                    </select>
                                  </div>
                                </th>
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
                            
                            ) :
                              (
                                <tr key={index}>
                                  <th className="pg-14-id">
                                    {index+1}
                                  </th>
                                  <th className="pg-14-name">{item.name}</th>
                                  <th className="pg-14-name">{item.description}</th>
                                  <th className="pg-14-name">{item.status ? 'ACTIVE' : 'IN ACTIVE'}{' '}</th>
                                  <th className="td-action-icon">
                                    <span
                                      className="ic-edit cursor-class"
                                      onClick={() => editButtonHandler(item)}
                                    >
                                      <img src="/assets/images/new-edit.svg" alt="" />
                                    </span>
                                  </th>
                                </tr>)
                          )
                        ):(
                          <tr>
                            <th colSpan={5}>No data found!</th>
                          </tr>
                        )}
                      
                      
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

export default createPermissions;
