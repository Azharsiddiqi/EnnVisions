import * as common from './common';
import * as userRoles from './userRoles';
import * as adminManage from './adminManage';
import * as fleetManage from './fleetManage';
import * as dispatcherManage from './dispatcherManage';
import * as vendorManage from './vendorManage';
import * as driverManage from './driverManage';
import * as mainCategories from './mainCategories';
import * as waiterManage from './waiterManage';
import * as vendorManageJawafa from './vendorManageJawafa';
import * as userManage from './userManage';
import * as riderManage from './riderManage';
import * as locationManage from './locationManage';
export const PRIVATE_ROUTES = {
  ...common,
  userRoles,
  adminManage,
  fleetManage,
  dispatcherManage,
  vendorManage,
  driverManage,
  waiterManage,
  vendorManageJawafa,
  userManage,
  riderManage,
  mainCategories,
  locationManage,
};
