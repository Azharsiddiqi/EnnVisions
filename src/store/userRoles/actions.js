import axios from 'axios';
import { BACKEND_BASE_URL } from '../../config';

import * as actionTypes from './types';

import * as toastify from '../../components/common/toastify';


// <-----------------------Start: Create Permission Section - Started----------------------->
export const ACTION_createPermissionList = (reqPacket) => (dispatch) =>{
  axios 
    .post(BACKEND_BASE_URL + '/api/permission/save',reqPacket)
    .then((res)=>{
      console.log('check res:' ,res);
      if(res.data.code === 201) {
        dispatch({
          type:actionTypes.CREATE_PERMISSION_LIST,
          payload:res.data.result
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error:',error));
};
export const ACTION_getAllPermissions = () => (dispatch) =>{
  axios 
    .get(BACKEND_BASE_URL + '/api/permission/getAll')
    .then((res)=>{
      console.log('check res:' ,res);
      if(res.data.code === 200) {
        dispatch({
          type:actionTypes.GET_ALL_PERMISSION_LIST,
          payload:res.data.result
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error:',error));
};
export const ACTION_updatePermissionsList = (reqPacket) => (dispatch) =>{
  axios 
    .put(BACKEND_BASE_URL + '/api/permission/update',reqPacket)
    .then((res)=>{
      console.log('check res:' ,res);
      if(res.data.code === 201) {
        dispatch({
          type:actionTypes.UPDATE_PERMISSION_LIST,
          payload:res.data.result
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error:',error));
};
// <-----------------------Ending: Create Permission Section----------------------->


// <-----------------------Start: Add New Role Section - Started----------------------->
export const ACTION_createUserRole = (reqPacket) => (dispatch) =>{
  axios
    .post(BACKEND_BASE_URL+'/api/role/save',reqPacket)
    .then((res)=>{
      console.log('check role :',res);
      if(res.data.code === 500){
        dispatch({
          type:actionTypes.CREATE_USER_ROLE,
          payload:res.data.result
        });
        toastify.Success(res.data.message);
      }
    })
    .catch((error)=> console.log('error:',error));
};
// <-----------------------Ending: Add New Role Section----------------------->








