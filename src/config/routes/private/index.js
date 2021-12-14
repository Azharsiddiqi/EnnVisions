import * as common from "./common";
import * as userRoles from "./userRoles";
import * as adminManage from "./adminManage";
import * as fleetManage from "./fleetManage";
import * as dispatcherManage from "./dispatcherManage";
import * as vendorManage from "./vendorManage";
import * as driverManage from "./driverManage";

export const PRIVATE_ROUTES = {
  ...common,
  userRoles,
  adminManage,
  fleetManage,
  dispatcherManage,
  vendorManage,
  driverManage,
};
