import * as actionTypes from './types';

const initialState = {
  businessCategories: [],
  businessType: [],
  houseDelivery: [],
  openStatus: [],
  alcohol: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_BUSINESS_CATEGORY:
      return {
        ...state,
        businessCategories: [...state.businessCategories, action.payload],
      };
    case actionTypes.ADD_NEW_BUSINESS_TYPE:
      return {
        ...state,
        businessType: [...state.businessType, action.payload],
      };
    case actionTypes.ADD_HOUSE_DELIVERY:
      return {
        ...state,
        houseDelivery: [...state.houseDelivery, action.payload],
      };
    case actionTypes.ADD_OPEN_STATUS:
      return {
        ...state,
        openStatus: [...state.openStatus, action.payload],
      };
    case actionTypes.ADD_ALCOHOL:
      return {
        ...state,
        alcohol: [...state.alcohol, action.payload],
      };

    default:
      return state;
  }
};
