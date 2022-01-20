import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './config';
export const authRoutes = [
  PUBLIC_ROUTES.login.path,
  PUBLIC_ROUTES.forgotPasswordEmail.path,
  PUBLIC_ROUTES.resetPassword.path,
  PUBLIC_ROUTES.registerVendor.path,
  PUBLIC_ROUTES.confirmationPassword.path,
];

export const privateRoutes = [
  PRIVATE_ROUTES.dashboard,
  // <------------------Starting: User Role------------------>

  PRIVATE_ROUTES.userRoles.addNewRole,
  PRIVATE_ROUTES.userRoles.createRegistrationForm,
  PRIVATE_ROUTES.userRoles.userRoleList,
  PRIVATE_ROUTES.userRoles.createPermissions,
  PRIVATE_ROUTES.userRoles.superAdmin,
  PRIVATE_ROUTES.userRoles.adminManagePer,

  // <------------------Starting: Admin Manage------------------>

  PRIVATE_ROUTES.adminManage.createAdmin,
  PRIVATE_ROUTES.adminManage.editAdmin,
  PRIVATE_ROUTES.adminManage.adminDetail,

  // <------------------Starting: Fleet Manage------------------>

  PRIVATE_ROUTES.fleetManage.createFleet,
  PRIVATE_ROUTES.fleetManage.editFleet,
  PRIVATE_ROUTES.fleetManage.fleetDetail,

  // <------------------Starting: Dispatcher------------------>

  PRIVATE_ROUTES.dispatcherManage.createDispatcher,
  PRIVATE_ROUTES.dispatcherManage.editDispatcher,
  PRIVATE_ROUTES.dispatcherManage.dispatcherDetail,

  // <------------------Starting: Vendor Manage------------------>

  PRIVATE_ROUTES.vendorManage.createVendor,
  PRIVATE_ROUTES.vendorManage.editVendor,
  PRIVATE_ROUTES.vendorManage.vendorDetail,
  PRIVATE_ROUTES.vendorManage.vendorList,
  PRIVATE_ROUTES.vendorManage.vendorOutLets,
  PRIVATE_ROUTES.vendorManage.editOutLet,
  PRIVATE_ROUTES.vendorManage.outLetsDetail,
  PRIVATE_ROUTES.vendorManage.helperList,
  PRIVATE_ROUTES.vendorManage.outLetDetail,

  // <------------------Starting: Driver Manage------------------>

  PRIVATE_ROUTES.driverManage.createDriver,
  PRIVATE_ROUTES.driverManage.driverList,
  PRIVATE_ROUTES.driverManage.editDriver,

  // <------------------Starting: Main Category------------------>
  PRIVATE_ROUTES.waiterManage.createWaiter,
  PRIVATE_ROUTES.waiterManage.editWaiter,
  PRIVATE_ROUTES.waiterManage.waiterList,

  // <------------------Starting: VENDOR MANAGE JAWAFA------------------>
  PRIVATE_ROUTES.vendorManageJawafa.createVendorJawafa,
  PRIVATE_ROUTES.vendorManageJawafa.vendorListJawafa,
  PRIVATE_ROUTES.vendorManageJawafa.vendorDetailJawafa,

  // <------------------Starting: USER MANAGE------------------>
  PRIVATE_ROUTES.userManage.userList,
  PRIVATE_ROUTES.userManage.editUser,

  // <------------------Starting: RIDER MANAGE------------------>
  PRIVATE_ROUTES.riderManage.riderList,
  PRIVATE_ROUTES.riderManage.riderEditUser,




  // <------------------Starting: Main Category------------------>

  PRIVATE_ROUTES.mainCategories.businessCategory,
  PRIVATE_ROUTES.mainCategories.businessType,
  PRIVATE_ROUTES.mainCategories.houseDeliveryService,
  PRIVATE_ROUTES.mainCategories.openStatus,
  PRIVATE_ROUTES.mainCategories.alcohol,
  PRIVATE_ROUTES.mainCategories.whoYouServe,
  PRIVATE_ROUTES.mainCategories.menuService,
  PRIVATE_ROUTES.mainCategories.seating,
  PRIVATE_ROUTES.mainCategories.paymentMethod,
  PRIVATE_ROUTES.mainCategories.cuisine,

  // <------------------Starting: Location Manage------------------>

  PRIVATE_ROUTES.locationManage.addLocation,
  PRIVATE_ROUTES.locationManage.helper,


];
