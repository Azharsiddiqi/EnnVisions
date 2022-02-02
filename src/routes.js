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
  PRIVATE_ROUTES.locationManage.editMainCategories,

  // <------------------Starting: Menu Manage------------------>
  PRIVATE_ROUTES.menuManage.menuList,
  PRIVATE_ROUTES.menuManage.menuVendorOutlets,
  PRIVATE_ROUTES.menuManage.outLetsSchedulePreparation,

  // <------------------Starting: DOCUMENT Manage------------------>

  PRIVATE_ROUTES.documentManage.addDocumentForm,
  PRIVATE_ROUTES.documentManage.document,

  // <------------------Starting: VEHICLE Manage------------------>
  PRIVATE_ROUTES.vehicleManage.vehicleType,
  PRIVATE_ROUTES.vehicleManage.vehicleMakeManagement,

  // <------------------Starting: FARE Manage------------------>
  PRIVATE_ROUTES.fareManage.fareManagement,
  PRIVATE_ROUTES.fareManage.manageFareManagement,
  PRIVATE_ROUTES.fareManage.editFareManagement,
  // <------------------Starting: COMMISSION Manage------------------>
  PRIVATE_ROUTES.commissionManage.feesManagement,
  // <------------------Starting: REFERRAL Manage------------------>
  PRIVATE_ROUTES.referralManage.referralDocuments,
  PRIVATE_ROUTES.referralManage.referralEdit,

  // <------------------Starting: STATEMENTS Manage------------------>
  PRIVATE_ROUTES.statementsManage.overAllStatements,
  PRIVATE_ROUTES.statementsManage.statementsDetail,
  PRIVATE_ROUTES.statementsManage.dispatcherStatements,
  PRIVATE_ROUTES.statementsManage.driverStatements,
  PRIVATE_ROUTES.statementsManage.waiterStatements,
  // <------------------Starting: ADMIN MANAGE XP------------------>
  PRIVATE_ROUTES.adminManageXP.agentStatements,
  PRIVATE_ROUTES.adminManageXP.vendorStatements,
  PRIVATE_ROUTES.adminManageXP.outLetStatements,
  PRIVATE_ROUTES.adminManageXP.helperStatements,
  PRIVATE_ROUTES.adminManageXP.driverListStatements,
  PRIVATE_ROUTES.adminManageXP.waiterListStatements,
  // <------------------Starting: CANCELLATION REASON MANAGE------------------>
  
  PRIVATE_ROUTES.cancellationReasonManage.addNewReason,
  PRIVATE_ROUTES.cancellationReasonManage.reasonList,
  PRIVATE_ROUTES.cancellationReasonManage.reasonDetails,
  // <------------------Starting: USER GUIDE MANAGE------------------>
  PRIVATE_ROUTES.userGuideManage.addUserGuide,
  PRIVATE_ROUTES.userGuideManage.userGuideList,
  PRIVATE_ROUTES.userGuideManage.userGuideDetails,

  // <------------------Starting:COMPLAINTS MANAGE------------------>
  PRIVATE_ROUTES.complaintsManage.companions,
  PRIVATE_ROUTES.complaintsManage.companionsOverAllStatements,
  // <------------------Starting:HELP AND SUPPORT MANAGE------------------>
  PRIVATE_ROUTES.helpAndSupportManage.helpCompanions,
  // <------------------Starting:ACCOUNT MANAGE------------------>
  PRIVATE_ROUTES.accountManage.account,

  // <------------------Starting:REPORT MANAGE------------------>
  PRIVATE_ROUTES.reportsManage.reportCompanions,



];
