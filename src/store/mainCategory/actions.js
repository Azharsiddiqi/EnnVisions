import axios from 'axios';
import { BACKEND_BASE_URL } from '../../config';

import * as actionTypes from './types';

import * as toastify from '../../components/common/toastify';

// <-----------------------Start: Business Category Section - Started----------------------->
export const ACTION_addNewBusinessCategoryItem = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/business/category/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_BUSINESS_CATEGORY_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getBusinessCategoryItems = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/business/category/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_BUSINESS_CATEGORY_ITEMS,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_deleteBusinessCategoryItem = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/business/category/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_BUSINESS_CATEGORY_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_updateBusinessCategoryItem = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/business/category/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_BUSINESS_CATEGORY_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getBusinessCategoriesSetup =
  () => (dispatch) => {
    axios
      .get(
        BACKEND_BASE_URL +
          '/api/business/category/getBusinessCategoriesSetup'
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.GET_BUSINESS_CATEGORY_SETUP,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };

export const ACTION_updateBusinessCategoriesDropdownList =
  (reqPacket) => (dispatch) => {
    axios
      .post(
        BACKEND_BASE_URL +
          '/api/business/category/updateBusinesscategoriesDropdown',
        reqPacket,
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.UPDATE_BUSINESS_CATEGORIES_DROPDOWN_LIST,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };

// <-----------------------Ending: Business Category Section----------------------->

// <-----------------------Start: Business Type Section - Started----------------------->

export const ACTION_addNewBusinessTypeItem = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/business/type/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_BUSINESS_TYPE_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getBusinessTypeItems = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/business/type/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_BUSINESS_TYPE_ITEMS,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateBusinessTypeItem = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/business/type/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_BUSINESS_TYPE_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateBusinessTypeDropdown = (reqPacket) => (dispatch) => {
  axios
    .post(
      BACKEND_BASE_URL + '/api/business/type/updateBusinessTypeDropdown',
      reqPacket,
    )
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_BUSINESS_TYPE_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_getBusinessTypeSetup =
  () => (dispatch) => {
    axios
      .get(
        BACKEND_BASE_URL +
          '/api/business/type/getBusinessTypeSetup'
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.GET_BUSINESS_CATEGORY_SETUP,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };

export const ACTION_deleteBusinessTypeItem = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/business/type/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_BUSINESS_TYPE_ITEM,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
// <-----------------------Ending: Business Type Section----------------------->

// <-----------------------Start: House Delivery Section - Started----------------------->

export const ACTION_addHouseDelivery = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/houseDelivery/option/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_HOUSE_DELIVERY,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getHouseDelivery = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/houseDelivery/option/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_HOUSE_DELIVERY,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateHouseDelivery = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/houseDelivery/option/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_HOUSE_DELIVERY,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateHouseDeliverySetup = (reqPacket) => (dispatch) => {
  axios
    .post(
      BACKEND_BASE_URL + '/api/houseDelivery/updateHouseDeliverySetup',
      reqPacket,
    )
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_HOUSE_DELIVERY_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deleteHouseDeliveryOption = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/houseDelivery/option/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_HOUSE_DELIVERY_OPTION,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_getHouseDeliverySetup =
  () => (dispatch) => {
    axios
      .get(
        BACKEND_BASE_URL +
          '/api/houseDelivery/getHouseDeliverySetup'
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.GET_HOUSE_DELIVERY_SETUP,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };

// <-----------------------Ending: House Delivery Section----------------------->

// <-----------------------Start: Open Status Section - Started----------------------->

export const ACTION_addOpenStatus = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/opening/status/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_OPEN_STATUS,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getOpenStatus = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/opening/status/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_OPEN_STATUS,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateOpenStatus = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/opening/status/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_OPEN_STATUS,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateOpeningStatusSetup = (reqPacket) => (dispatch) => {
  axios
    .post(
      BACKEND_BASE_URL + '/api/opening/status/updateOpeningStatusSetup',
      reqPacket,
    )
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_OPEN_STATUS_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getOpeningStatusSetup =
  () => (dispatch) => {
    axios
      .get(
        BACKEND_BASE_URL +
          '/api/opening/status/getOpeningStatusSetup'
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.GET_OPEN_STATUS_SETUP,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };

export const ACTION_deleteOpeningStatusSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/opening/status/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_OPEN_STATUS_ITEM,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
// <-----------------------Ending: Open Status Section----------------------->

// <-----------------------Start: Alcohol Section - Started----------------------->

export const ACTION_addAlcohol = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/alcohal/option/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_ALCOHOL,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getAlcohol = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/alcohal/option/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_ALCOHOL,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateAlcohol = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/alcohal/option/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_ALCOHOL,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateAlcoholSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/alcohal/updateAlcohalSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_ALCOHOL_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_getAlcoholSetup =
  () => (dispatch) => {
    axios
      .get(
        BACKEND_BASE_URL +
          '/api/alcohal/getAlcohalSetup'
      )
      .then((res) => {
        console.log('checking res: ', res);
        if (res.data.code === 200) {
          dispatch({
            type: actionTypes.GET_ALCOHOL_SETUP,
            payload: res.data.result,
          });
          toastify.Success(res.data.message);
        } else {
          toastify.Error('Something went wrong! Please try again.');
        }
      })
      .catch((error) => console.log('error: ', error));
  };
export const ACTION_deleteAlcoholSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/alcohal/option/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_ALCOHOL,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

// <-----------------------Ending: Open Status Section----------------------->
