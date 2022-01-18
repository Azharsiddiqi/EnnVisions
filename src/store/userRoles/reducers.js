import * as actionTypes from './types';
import _ from 'lodash';


const initialState = {
  userPermissions: [],
  rolesList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
  // <-----------------------Beginning: Create Permission list----------------------->
  case actionTypes.CREATE_PERMISSION_LIST:
    return {
      ...state,
      userPermissions: [...state.userPermissions, action.payload]
    };

  case actionTypes.GET_ALL_PERMISSION_LIST:
    return {
      ...state,
      userPermissions: [...action.payload],
    };

  case actionTypes.UPDATE_PERMISSION_LIST: {
    const updatePermissionList = _.cloneDeep(state.userPermissions);
    const index = updatePermissionList.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatePermissionList[index] = { ...action.payload };
    }
    return {
      ...state,
      userPermissions: updatePermissionList,
    };
  }

  // <-----------------------Beginning: Create User Role ----------------------->
  case actionTypes.CREATE_USER_ROLE:
    return {
      ...state,
      rolesList: [...state.rolesList, action.payload]
    };


  default:
    return state;
  }

};