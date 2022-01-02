import * as common from './common';
import * as userRoles from './userRoles';
import * as adminManage from './adminManage';
import * as fleetManage from './fleetManage';
import * as dispatcherManage from './dispatcherManage';
import * as vendorManage from './vendorManage';
import * as driverManage from './driverManage';
import * as mainCategories from './mainCategories';

export const PRIVATE_ROUTES = {
  ...common,
  userRoles,
  adminManage,
  fleetManage,
  dispatcherManage,
  vendorManage,
  driverManage,
  mainCategories,
};
