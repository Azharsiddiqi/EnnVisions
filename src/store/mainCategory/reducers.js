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
  whoYouServe:{},
  whoYouServingItems: [],
  menuService:{},
  menuServiceItems:[],
  seating:{},
  seatingItems:[],
  paymentMethod:{},
  paymentMethodItems:[],
  cuisine:{},
  cuisineItems:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
  // <-----------------------Beginning Business category list----------------------->
  case actionTypes.GET_BUSINESS_CATEGORY_SETUP:
    return {
      ...state,
      businessCategory: {...action.payload},
    };

  case actionTypes.UPDATE_BUSINESS_CATEGORIES_DROPDOWN_LIST:
    return {
      ...state,
      businessCategory: {...action.payload},
    };
  case actionTypes.ADD_NEW_BUSINESS_CATEGORY_ITEM:
    return {
      ...state,
      businessCategoriesItems: [
        ...state.businessCategoriesItems,
        action.payload,
      ],
    };
  case actionTypes.GET_BUSINESS_CATEGORY_ITEMS:
    return {
      ...state,
      businessCategoriesItems: [...action.payload],
    };
  case actionTypes.DELETE_BUSINESS_CATEGORY_ITEM: {
    const updatedBusinessCategoriesItems = _.cloneDeep(
      state.businessCategoriesItems,
    );
    _.remove(updatedBusinessCategoriesItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      businessCategoriesItems: updatedBusinessCategoriesItems,
    };
  }
  case actionTypes.UPDATE_BUSINESS_CATEGORY_ITEM: {
    const updatedBusinessCategoriesItems = _.cloneDeep(
      state.businessCategoriesItems,
    );
    const index = updatedBusinessCategoriesItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedBusinessCategoriesItems[index] = { ...action.payload };
    }
    return {
      ...state,
      businessCategoriesItems: updatedBusinessCategoriesItems,
    };
  }
  // <-----------------------Ending: Business category list----------------------->

  // <-----------------------Beginning: Business Type Section----------------------->
  case actionTypes.GET_BUSINESS_TYPE_SETUP:
    return {
      ...state,
      businessType: {...action.payload},
    };
 
 
  case actionTypes.UPDATE_BUSINESS_TYPE_DROPDOWN_LIST:
    return {
      ...state,
      businessType: {...action.payload},
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
    const index = updatedBusinessTypeItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedBusinessTypeItems[index] = { ...action.payload };
    }
    return {
      ...state,
      businessTypeItems: updatedBusinessTypeItems,
    };
  }

  // <-----------------------Ending: Business Type Section----------------------->

  // <-----------------------Beginning: House Delivery Service Section----------------------->
  case actionTypes.GET_HOUSE_DELIVERY_SETUP:
    return {
      ...state,
      houseDeliveryService: {...action.payload},
    };
  
  
  
  case actionTypes.UPDATE_HOUSE_DELIVERY_SETUP:
    return {
      ...state,
      houseDeliveryService: {...action.payload},
    };

  case actionTypes.ADD_HOUSE_DELIVERY:
    return {
      ...state,
      houseDeliveryServiceItems: [
        ...state.houseDeliveryServiceItems,
        action.payload,
      ],
    };
  case actionTypes.GET_HOUSE_DELIVERY:
    return {
      ...state,
      houseDeliveryServiceItems: [...action.payload],
    };
  case actionTypes.DELETE_HOUSE_DELIVERY_OPTION: {
    const updatedHouseDeliveryServiceItems = _.cloneDeep(
      state.houseDeliveryServiceItems,
    );
    _.remove(updatedHouseDeliveryServiceItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      houseDeliveryServiceItems: updatedHouseDeliveryServiceItems,
    };
  }
  case actionTypes.UPDATE_HOUSE_DELIVERY: {
    const updatedHouseDeliveryServiceItems = _.cloneDeep(
      state.houseDeliveryServiceItems,
    );
    const index = updatedHouseDeliveryServiceItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedHouseDeliveryServiceItems[index] = { ...action.payload };
    }
    return {
      ...state,
      houseDeliveryServiceItems: updatedHouseDeliveryServiceItems,
    };
  }
  // <-----------------------Ending: House Delivery Service Section----------------------->

  // <-----------------------Beginning: Open Status Section----------------------->
  case actionTypes.GET_OPEN_STATUS_SETUP:
    return {
      ...state,
      openingStatus: {...action.payload},
    };
 



  case actionTypes.UPDATE_OPEN_STATUS_DROPDOWN_LIST:
    return {
      ...state,
      openingStatus: {...action.payload},
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
      updatedOpeningStatusItems[index] = { ...action.payload };
    }
    return {
      ...state,
      openingStatusItems: updatedOpeningStatusItems,
    };
  }
  // <-----------------------Ending: Open Status Section----------------------->

  // <-----------------------Beginning: Alcohol Section----------------------->

  case actionTypes.GET_ALCOHOL_SETUP:
    return {
      ...state,
      alcohol: {...action.payload},
    };


  case actionTypes.UPDATE_ALCOHOL_DROPDOWN_LIST:
    return {
      ...state,
      alcohol: {...action.payload},
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
    const index = updatedAlcoholItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedAlcoholItems[index] = { ...action.payload };
    }
    return {
      ...state,
      alcoholItems: updatedAlcoholItems,
    };
  }

  // <-----------------------Ending: Alcohol Section----------------------->

  // <-----------------------Beginning: Who You Serve  Section----------------------->
  case actionTypes.GET_SERVING_SETUP:
    return {
      ...state,
      whoYouServe: {...action.payload},
    };
  case actionTypes.UPDATE_SERVING_DROPDOWN_LIST:
    return {
      ...state,
      whoYouServe: {...action.payload},
    };
  case actionTypes.ADD_NEW_SERVING:
    return {
      ...state,
      whoYouServingItems: [...state.whoYouServingItems, action.payload],
    };
  case actionTypes.GET_SERVING:
    return {
      ...state,
      whoYouServingItems: [...action.payload],
    };
  case actionTypes.DELETE_SERVING: {
    const updatedWhoYouServingItems = _.cloneDeep(state.whoYouServingItems);
    _.remove(updatedWhoYouServingItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      whoYouServingItems: updatedWhoYouServingItems,
    };
  }
  case actionTypes.UPDATE_SERVING: {
    const updatedWhoYouServingItems = _.cloneDeep(state.whoYouServingItems);
    const index = updatedWhoYouServingItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedWhoYouServingItems[index] = { ...action.payload };
    }
    return {
      ...state,
      whoYouServingItems: updatedWhoYouServingItems,
    };
  }
  // <-----------------------Ending: Who You Serve  Section----------------------->

  // <-----------------------Beginning: Menu Service  Section----------------------->
  case actionTypes.GET_MENU_SETUP:
    return {
      ...state,
      menuService: {...action.payload},
    };
  case actionTypes.UPDATE_MENU_DROPDOWN_LIST:
    return {
      ...state,
      menuService: {...action.payload},
    };
  case actionTypes.ADD_NEW_MENU:
    return {
      ...state,
      menuServiceItems: [...state.menuServiceItems, action.payload],
    };
  case actionTypes.GET_MENU:
    return {
      ...state,
      menuServiceItems: [...action.payload],
    };
  case actionTypes.DELETE_MENU: {
    const updatedMenuServiceItems = _.cloneDeep(state.menuServiceItems);
    _.remove(updatedMenuServiceItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      menuServiceItems: updatedMenuServiceItems,
    };
  }
  case actionTypes.UPDATE_MENU: {
    const updatedMenuServiceItems = _.cloneDeep(state.menuServiceItems);
    const index = updatedMenuServiceItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedMenuServiceItems[index] = { ...action.payload };
    }
    return {
      ...state,
      menuServiceItems: updatedMenuServiceItems,
    };
  }
  // <-----------------------Ending: Menu Service  Section----------------------->


  // <-----------------------Beginning: Seating  Section----------------------->
  case actionTypes.GET_SEATING_SETUP:
    return {
      ...state,
      seating: {...action.payload},
    };
  case actionTypes.UPDATE_SEATING_DROPDOWN_LIST:
    return {
      ...state,
      seating: {...action.payload},
    };
  case actionTypes.ADD_NEW_SEATING:
    return {
      ...state,
      seatingItems: [...state.seatingItems, action.payload],
    };
  case actionTypes.GET_SEATING:
    return {
      ...state,
      seatingItems: [...action.payload],
    };
  case actionTypes.DELETE_SEATING: {
    const updatedSeatingItems = _.cloneDeep(state.seatingItems);
    _.remove(updatedSeatingItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      seatingItems: updatedSeatingItems,
    };
  }
  case actionTypes.UPDATE_SEATING: {
    const updatedSeatingItems = _.cloneDeep(state.seatingItems);
    const index = updatedSeatingItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedSeatingItems[index] = { ...action.payload };
    }
    return {
      ...state,
      seatingItems: updatedSeatingItems,
    };
  }
  // <-----------------------Ending: Seating  Section----------------------->

  // <-----------------------Beginning: PaymentMethod  Section----------------------->
  case actionTypes.GET_PAYMENT_METHOD_SETUP:
    return {
      ...state,
      paymentMethod: {...action.payload},
    };
  case actionTypes.UPDATE_PAYMENT_METHOD_DROPDOWN_LIST:
    return {
      ...state,
      paymentMethod: {...action.payload},
    };
  case actionTypes.ADD_NEW_PAYMENT_METHOD:
    return {
      ...state,
      paymentMethodItems: [...state.paymentMethodItems, action.payload],
    };
  case actionTypes.GET_PAYMENT_METHOD:
    return {
      ...state,
      paymentMethodItems: [...action.payload],
    };
  case actionTypes.DELETE_PAYMENT_METHOD: {
    const updatedPaymentMethodItems = _.cloneDeep(state.paymentMethodItems);
    _.remove(updatedPaymentMethodItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      paymentMethodItems: updatedPaymentMethodItems,
    };
  }
  case actionTypes.UPDATE_PAYMENT_METHOD: {
    const updatedPaymentMethodItems = _.cloneDeep(state.paymentMethodItems);
    const index = updatedPaymentMethodItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedPaymentMethodItems[index] = { ...action.payload };
    }
    return {
      ...state,
      paymentMethodItems: updatedPaymentMethodItems,
    };
  }
  // <-----------------------Ending: PaymentMethod  Section----------------------->

  // <-----------------------Beginning: Cuisine  Section----------------------->
  case actionTypes.GET_CUISINE_SETUP:
    return {
      ...state,
      cuisine: {...action.payload},
    };
  case actionTypes.UPDATE_CUISINE_DROPDOWN_LIST:
    return {
      ...state,
      cuisine: {...action.payload},
    };
  case actionTypes.ADD_NEW_CUISINE:
    return {
      ...state,
      cuisineItems: [...state.cuisineItems, action.payload],
    };
  case actionTypes.GET_CUISINE:
    return {
      ...state,
      cuisineItems: [...action.payload],
    };
  case actionTypes.DELETE_CUISINE: {
    const updatedCuisineItems = _.cloneDeep(state.cuisineItems);
    _.remove(updatedCuisineItems, {
      id: action.payload.id,
    });
    return {
      ...state,
      cuisineItems: updatedCuisineItems,
    };
  }
  case actionTypes.UPDATE_CUISINE: {
    const updatedCuisineItems = _.cloneDeep(state.cuisineItems);
    const index = updatedCuisineItems.findIndex(
      (object) => object.id === action.payload.id,
    );
    if (index >= 0) {
      updatedCuisineItems[index] = { ...action.payload };
    }
    return {
      ...state,
      cuisineItems: updatedCuisineItems,
    };
  }
  // <-----------------------Ending: Cuisine  Section----------------------->


  default:
    return state;
  }
};
