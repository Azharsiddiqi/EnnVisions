import * as actionTypes from './types';
import _ from 'lodash';

const initialState = {
  businessCategory: {},
  businessCategoriesItems: [],
  businessType: {},
  businessTypeItems: [],
  houseDeliveryService: {},
  houseDeliveryServiceItems: [],
  openingStatus: {},
  openingStatusItems: [],
  alcohol: {},
  alcoholItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // <-----------------------Beginning Business category list----------------------->
    case actionTypes.UPDATE_BUSINESS_CATEGORIES_DROPDOWN_LIST:
      return {
        ...state,
        businessCategory: action.payload,
      };
    case actionTypes.ADD_NEW_BUSINESS_CATEGORY_ITEM:
      return {
        ...state,
        businessCategoriesItems: [...state.businessCategoriesItems, action.payload],
      };
    case actionTypes.GET_BUSINESS_CATEGORY_ITEMS:
      return {
        ...state,
        businessCategoriesItems: [...action.payload],
      };
    case actionTypes.DELETE_BUSINESS_CATEGORY_ITEM: {
      const updatedBusinessCategoriesItems = _.cloneDeep(state.businessCategoriesItems);
      _.remove(updatedBusinessCategoriesItems, {
        id: action.payload.id,
      });
      return {
        ...state,
        businessCategoriesItems: updatedBusinessCategoriesItems,
      };
    }
    case actionTypes.UPDATE_BUSINESS_CATEGORY_ITEM: {
      const updatedBusinessCategoriesItems = _.cloneDeep(state.businessCategoriesItems);
      const index = updatedBusinessCategoriesItems.findIndex(
        (object) => object.id === action.payload.id,
      );
      if (index >= 0) {
        updatedBusinessCategoriesItems[index] = {...action.payload};
      }
      return {
        ...state,
        businessCategoriesItems: updatedBusinessCategoriesItems,
      };
    }
    // <-----------------------Ending: Business category list----------------------->

    // <-----------------------Beginning: Business Type Section----------------------->
    case actionTypes.UPDATE_BUSINESS_TYPE_DROPDOWN_LIST:
      return {
        ...state,
        businessType: action.payload,
      };
    case actionTypes.ADD_NEW_BUSINESS_TYPE_ITEM:
      return {
        ...state,
        businessTypeItems: [...state.businessTypeItems, action.payload],
      };
    case actionTypes.GET_BUSINESS_TYPE_ITEMS:
      return {
        ...state,
        businessTypeItems: [...action.payload],
      };
    case actionTypes.DELETE_BUSINESS_TYPE_ITEM: {
      const updatedBusinessTypeItems = _.cloneDeep(state.businessTypeItems);
      _.remove(updatedBusinessTypeItems, {
        id: action.payload.id,
      });
      return {
        ...state,
        businessTypeItems: updatedBusinessTypeItems,
      };
    }
    case actionTypes.UPDATE_BUSINESS_TYPE_ITEM: {
      const updatedBusinessTypeItems = _.cloneDeep(state.businessTypeItems);
      const index = updatedBusinessTypeItems.findIndex((object) => object.id === action.payload.id);
      if (index >= 0) {
        updatedBusinessTypeItems[index] = {...action.payload};
      }
      return {
        ...state,
        businessTypeItems: updatedBusinessTypeItems,
      };
    }

    // <-----------------------Ending: Business Type Section----------------------->

    // <-----------------------Beginning: House Delivery Service Section----------------------->
    case actionTypes.UPDATE_HOUSE_DELIVERY_SETUP:
      return {
        ...state,
        houseDeliveryService: action.payload,
      };

    case actionTypes.ADD_HOUSE_DELIVERY:
      return {
        ...state,
        houseDeliveryServiceItems: [...state.houseDeliveryServiceItems, action.payload],
      };
    case actionTypes.GET_HOUSE_DELIVERY:
      return {
        ...state,
        houseDeliveryServiceItems: [...action.payload],
      };
    case actionTypes.DELETE_HOUSE_DELIVERY_OPTION: {
      const updatedHouseDeliveryServiceItems = _.cloneDeep(state.houseDeliveryServiceItems);
      _.remove(updatedHouseDeliveryServiceItems, {
        id: action.payload.id,
      });
      return {
        ...state,
        houseDeliveryServiceItems: updatedHouseDeliveryServiceItems,
      };
    }
    case actionTypes.UPDATE_HOUSE_DELIVERY: {
      const updatedHouseDeliveryServiceItems = _.cloneDeep(state.houseDeliveryServiceItems);
      const index = updatedHouseDeliveryServiceItems.findIndex(
        (object) => object.id === action.payload.id,
      );
      if (index >= 0) {
        updatedHouseDeliveryServiceItems[index] = {...action.payload};
      }
      return {
        ...state,
        houseDeliveryServiceItems: updatedHouseDeliveryServiceItems,
      };
    }
    // <-----------------------Ending: House Delivery Service Section----------------------->

    // <-----------------------Beginning: Open Status Section----------------------->

    case actionTypes.UPDATE_OPEN_STATUS_DROPDOWN_LIST:
      return {
        ...state,
        openingStatus: action.payload,
      };
    case actionTypes.ADD_OPEN_STATUS:
      return {
        ...state,
        openingStatusItems: [...state.openingStatusItems, action.payload],
      };
    case actionTypes.GET_OPEN_STATUS:
      return {
        ...state,
        openingStatusItems: [...action.payload],
      };
    case actionTypes.DELETE_OPEN_STATUS_ITEM: {
      const updatedOpeningStatusItems = _.cloneDeep(state.openingStatusItems);
      _.remove(updatedOpeningStatusItems, {
        id: action.payload.id,
      });
      return {
        ...state,
        openingStatusItems: updatedOpeningStatusItems,
      };
    }
    case actionTypes.UPDATE_OPEN_STATUS: {
      const updatedOpeningStatusItems = _.cloneDeep(state.openingStatusItems);
      const index = updatedOpeningStatusItems.findIndex(
        (object) => object.id === action.payload.id,
      );
      if (index >= 0) {
        updatedOpeningStatusItems[index] = {...action.payload};
      }
      return {
        ...state,
        openingStatusItems: updatedOpeningStatusItems,
      };
    }
    // <-----------------------Ending: Open Status Section----------------------->

    // <-----------------------Beginning: Alcohol Section----------------------->
    case actionTypes.UPDATE_ALCOHOL_DROPDOWN_LIST:
      return {
        ...state,
        alcohol: action.payload,
      };
    case actionTypes.ADD_ALCOHOL:
      return {
        ...state,
        alcoholItems: [...state.alcoholItems, action.payload],
      };
    case actionTypes.GET_ALCOHOL:
      return {
        ...state,
        alcoholItems: [...action.payload],
      };
    case actionTypes.DELETE_ALCOHOL: {
      const updatedAlcoholItems = _.cloneDeep(state.alcoholItems);
      _.remove(updatedAlcoholItems, {
        id: action.payload.id,
      });
      return {
        ...state,
        alcoholItems: updatedAlcoholItems,
      };
    }
    case actionTypes.UPDATE_ALCOHOL: {
      const updatedAlcoholItems = _.cloneDeep(state.alcoholItems);
      const index = updatedAlcoholItems.findIndex((object) => object.id === action.payload.id);
      if (index >= 0) {
        updatedAlcoholItems[index] = {...action.payload};
      }
      return {
        ...state,
        alcoholItems: updatedAlcoholItems,
      };
    }

    // <-----------------------Ending: Alcohol Section----------------------->

    default:
      return state;
  }
};
