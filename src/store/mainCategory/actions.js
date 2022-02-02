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
          '/api/business/type/getBusinessTypeSetup')
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

// <-----------------------Ending: Alcohol Section----------------------->

// <-----------------------Start:Who You Serve Started----------------------->

export const ACTION_addServing = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/Servering/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_SERVING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getServing = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/Servering/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_SERVING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateServing = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/Servering/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_SERVING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deleteServingSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/Servering/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_SERVING,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_getServingSetup =() => (dispatch) => {
  axios
    .get(
      BACKEND_BASE_URL +
          '/api/Servering/getServeringOptionSetup'
    )
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_SERVING_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateServingSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/Servering/updateServeringOptionSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_SERVING_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};


// <-----------------------Ending: Who You Serve Section----------------------->

// <-----------------------Start:Menu Service Started----------------------->

export const ACTION_addMenu = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/menuOption/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_MENU,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getMenu = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/menuOption/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_MENU,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateMenu = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/menuOption/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_MENU,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deleteMenu = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/menuOption/delete?menuOptionId=1', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_MENU,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_getMenuSetup =() => (dispatch) => {
  axios
    .get(
      BACKEND_BASE_URL +
          '/api/menuOption/getMenuOptioSetup'
    )
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_MENU_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateMenuSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/menuOption/updateMenuOptioSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_MENU_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
// <-----------------------Ending:Menu Service Section----------------------->

// <-----------------------Start:Seating Started----------------------->

export const ACTION_addSeating = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/seating/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_SEATING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getSeating = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/seating/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_SEATING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateSeating = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/seating/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_SEATING,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deleteSeating = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/seating/delete?seatingOptionId=2', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_SEATING,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateSeatingSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/seating/updateSeatingOptioSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_SEATING_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getSeatingSetup =() => (dispatch) => {
  axios
    .get(
      BACKEND_BASE_URL +'/api/seating/getSeatingOptioSetup')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_SEATING_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
 
// <-----------------------Ending:Seating Section----------------------->

// <-----------------------Start:Payment Method  Started----------------------->

export const ACTION_addPaymentMethod = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/paymentMethod/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_PAYMENT_METHOD,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getPaymentMethod = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/paymentMethod/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_PAYMENT_METHOD,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updatePaymentMethod = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/paymentMethod/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_PAYMENT_METHOD,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deletePaymentMethod = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/paymentMethod/delete?paymentMathodsOptionId=1', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_PAYMENT_METHOD,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updatePaymentMethodSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/paymentMethod/updatePaymentMathodsOptioSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_PAYMENT_METHOD_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getPaymentMethodSetup =() => (dispatch) => {
  axios
    .get(
      BACKEND_BASE_URL +'/api/paymentMethod/getPaymentMathodsOptioSetup')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_PAYMENT_METHOD_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

// <-----------------------Ending:Payment Method Section----------------------->


// <-----------------------Start:Cuisine Started----------------------->

export const ACTION_addCuisine = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/cuisines/save', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 201) {
        dispatch({
          type: actionTypes.ADD_NEW_CUISINE,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getCuisine = () => (dispatch) => {
  axios
    .get(BACKEND_BASE_URL + '/api/cuisines/get')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_CUISINE,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateCuisine = (reqPacket) => (dispatch) => {
  axios
    .put(BACKEND_BASE_URL + '/api/cuisines/update', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_CUISINE,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_deleteCuisine = (reqPacket) => (dispatch) => {
  axios
    .delete(BACKEND_BASE_URL + '/api/cuisines/delete', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.DELETE_CUISINE,
          payload: reqPacket,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};
export const ACTION_updateCuisineSetup = (reqPacket) => (dispatch) => {
  axios
    .post(BACKEND_BASE_URL + '/api/cuisines/updateCuisinesSetup', reqPacket)
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.UPDATE_CUISINE_DROPDOWN_LIST,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

export const ACTION_getCuisineSetup =() => (dispatch) => {
  axios
    .get(
      BACKEND_BASE_URL +'/api/cuisines/getCuisinesSetup')
    .then((res) => {
      console.log('checking res: ', res);
      if (res.data.code === 200) {
        dispatch({
          type: actionTypes.GET_CUISINE_SETUP,
          payload: res.data.result,
        });
        toastify.Success(res.data.message);
      } else {
        toastify.Error('Something went wrong! Please try again.');
      }
    })
    .catch((error) => console.log('error: ', error));
};

// <-----------------------Ending:Cuisine Section----------------------->