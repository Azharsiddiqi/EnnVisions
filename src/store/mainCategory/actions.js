import axios from 'axios';
import {BACKEND_BASE_URL} from '../../config';

import * as actionTypes from './types';

import * as toastify from '../../components/common/toastify';

export const ACTION_addNewBusinessCategory = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/business/category/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_BUSINESS_CATEGORY,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_addNewBusinessCategoryGet = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/business/category/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_BUSINESS_CATEGORY_GET,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_addNewBusinessType = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/business/type/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_BUSINESS_TYPE,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_addHouseDelivery = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/houseDelivery/option/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_HOUSE_DELIVERY,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_openStatus = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/opening/status/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_OPEN_STATUS,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_addAlcohol = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/alcohal/option/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.code === 201) {
        dispatch({
          type: actionTypes.ADD_ALCOHOL,
          payload: res.result,
        });
        toastify.Success(res.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
