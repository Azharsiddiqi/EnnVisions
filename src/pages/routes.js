import { PRIVATE_ROUTES } from '../config';

import Index from './Dashboard/dashboard.jsx';
// start: ROLES Import
import AddNewRoles from './UserRoles/addNewRoles';
import CreatePermissions from './UserRoles/createPermissions';
import CreateRegistrationForm from './UserRoles/createRegistrationForm';
import UserRoleList from './UserRoles/userRolesList';
import SuperAdmin from './UserRoles/superAdmin';
import AdminManagePer from './UserRoles/adminManagePer';
// start: ADMIN Import
import CreateAdmin from './AdminManage/createAdmin';
import AdminDetail from './AdminManage/adminDetail';
// start: FLEET Import
import CreateFleet from './FleetManage/createFleet';
import FleetDetail from './FleetManage/fleetDetail';
// start: DISPATCHER Import
import CreateDispatcher from './DispatcherManage/createDispatcher';
import DispatcherDetail from './DispatcherManage/dispatcherDetail';
// start: VENDOR Import
import CreateVendor from './VendorManage/createVendor';
import VendorDetail from './VendorManage/vendorDetail';
import VendorList from './VendorManage/vendorList';
import VendorOutlets from './VendorManage/OutLets/vendorOutlets';
import OutLetsDetail from './VendorManage/OutLets/outLetsDetail';
import EditOutLets from './VendorManage/OutLets/editOutLets';
import HelperList from './VendorManage/helperList';
import OutLetDetail from './VendorManage/OutLets/outLetDetail';
// start: DRIVER MANAGE 
import CreateDriver from './DriverManage/createDriver';
import DriverList from './DriverManage/driverList';
import EditDriver from './DriverManage/editDriver';

// start: WAITER MANAGE 
import CreateWaiter from './WaiterManage/createWaiter';
import EditWaiter from './WaiterManage/editWaiter';
import WaiterList from './WaiterManage/waiterList';

// start: VENDOR MANAGE JAWAFA 
import CreateVendorJawafa from './VendorManageJawafa/createVendorJawafa';
import VendorListJawafa from './VendorManageJawafa/vendorListJawafa';
import VendorDetailJawafa from './VendorManageJawafa/vendorDetailJawafa';

// start: USER MANAGE 
import UserList from './userManage/userList.jsx';
import EditUser from './userManage/editUser';

// start: RIDER MANAGE 
import RiderEditUser from './RiderManage/riderEditUser';
import RiderList from './RiderManage/riderList';

// start: MAIN CATEGORIES
import Alcohol from './MainCategories/alcohol';
import BusinessCategory from './MainCategories/businessCategory';
import BusinessType from './MainCategories/businessType';
import Cuisine from './MainCategories/cuisine';
import HouseDeliveryService from './MainCategories/houseDeliveryService';
import MenuService from './MainCategories/menuService';
import OpenStatus from './MainCategories/openStatus';
import PaymentMethod from './MainCategories/paymentMethod';
import Seating from './MainCategories/seating';
import WhoYouServe from './MainCategories/whoYouServe';

// start: LOCATION MANAGE
import AddLocation from './LocationManage/addLocation';
import Helper from './LocationManage/helper';
import EditMainCategories from './LocationManage/editMainCategories';

// start: MENU MANAGE
import MenuList from './MenuManage/menuList';
import MenuVendorOutlets from './MenuManage/menuVendorOutlets';
import OutLetsSchedulePreparation from './MenuManage/outLetsSchedulePreparation';

//start: DOCUMENT MANAGE 
import AddDocumentForm from './DocumentManage/addDocumentForm';
import Document from './DocumentManage/document';

//start: VEHICLE MANAGE 
import VehicleType from './vehicleManage/vehicleType';
import VehicleMakeManagement from './vehicleManage/vehicleMakeManagement';

//start: VEHICLE MANAGE 
import FareManagement from './FareManage/fareManagement';
import ManageFareManagement from './FareManage/manageFareManagement';
import EditFareManagement from './FareManage/editFareManagement';

//start: COMMISSION MANAGE 

import FeesManagement from './CommissionManage/feesManagement';


//start: REFERRAL  MANAGE 
import ReferralDocuments from './ReferralManage/referralDocuments';
import ReferralEdit from './ReferralManage/referralEdit';
//start: STATEMENTS  MANAGE 
import OverAllStatements from './StatementsManage/overAllStatements';
import StatementsDetail from './StatementsManage/statementsDetail';
import DispatcherStatements from './StatementsManage/dispatcherStatements';
import DriverStatements from './StatementsManage/driverStatements';
import WaiterStatements from './StatementsManage/waiterStatements';
//start: ADMIN  MANAGE XP
import AgentStatements from './AdminManageXP/agentStatements'; 
import VendorStatements from './AdminManageXP/vendorStatements';
import OutLetStatements from './AdminManageXP/outLetStatements';
import WaiterListStatements from './AdminManageXP/waiterListStatements';
import HelperStatements from './AdminManageXP/helperStatements.jsx';
import DriverListStatements from './AdminManageXP/driverListStatements';
//START: CANCELLATION REASON MANAGE
import AddNewReason from './CancellationReasonManage/addNewReason';
import ReasonList from './CancellationReasonManage/reasonList';
import ReasonDetails from './CancellationReasonManage/reasonDetails';
//START: USER GUIDE MANAGE 
import AddUserGuide from './UserGuideManage/addUserGuide';
import UserGuideList from './UserGuideManage/userGuideList';
import UserGuideDetails from './UserGuideManage/userGuideDetails';
//START: COMPANIONS MANAGE
import Companions from './ComplaintsManage/companions';
import CompanionsOverAllStatements from './ComplaintsManage/companionsOverAllStatements';
//START: HELP & SUPPORT MANAGE
import HelpCompanions from './HelpAndSupportManage/helpCompanions';
//START: ACCOUNT MANAGE
import Account from './AccountManage/account';
//START: REPORT MANAGE
import ReportCompanions from './ReportsManage/reportCompanions';

export const PublicRoutesComponent = [
  { path: PRIVATE_ROUTES.dashboard.path, Component: Index },

  { path: PRIVATE_ROUTES.userRoles.addNewRole.path, Component: AddNewRoles },
  {
    path: PRIVATE_ROUTES.userRoles.createRegistrationForm.path,
    Component: CreateRegistrationForm,
  },
  {
    path: PRIVATE_ROUTES.userRoles.userRoleList.path,
    Component: UserRoleList,
  },

  {
    path: PRIVATE_ROUTES.userRoles.createPermissions.path,
    Component: CreatePermissions,
  },
  {
    path: PRIVATE_ROUTES.userRoles.superAdmin.path,
    Component: SuperAdmin,
  },
  {
    path: PRIVATE_ROUTES.userRoles.adminManagePer.path,
    Component: AdminManagePer,
  },

  {
    path: PRIVATE_ROUTES.adminManage.createAdmin.path,
    Component: CreateAdmin,
  },
  {
    path: PRIVATE_ROUTES.adminManage.adminDetail.path,
    Component: AdminDetail,
  },
  { path: PRIVATE_ROUTES.adminManage.editAdmin.path, Component: CreateAdmin },

  {
    path: PRIVATE_ROUTES.fleetManage.createFleet.path,
    Component: CreateFleet,
  },
  { path: PRIVATE_ROUTES.fleetManage.editFleet.path, Component: CreateFleet },
  {
    path: PRIVATE_ROUTES.fleetManage.fleetDetail.path,
    Component: FleetDetail,
  },

  {
    path: PRIVATE_ROUTES.dispatcherManage.createDispatcher.path,
    Component: CreateDispatcher,
  },
  {
    path: PRIVATE_ROUTES.dispatcherManage.editDispatcher.path,
    Component: CreateDispatcher,
  },
  {
    path: PRIVATE_ROUTES.dispatcherManage.dispatcherDetail.path,
    Component: DispatcherDetail,
  },
  {
    path: PRIVATE_ROUTES.dispatcherManage.dispatcherDetail.path,
    Component: DispatcherDetail,
  },

  {
    path: PRIVATE_ROUTES.vendorManage.createVendor.path,
    Component: CreateVendor,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.vendorDetail.path,
    Component: VendorDetail,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.vendorList.path,
    Component: VendorList,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.vendorOutLets.path,
    Component: VendorOutlets,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.outLetsDetail.path,
    Component: OutLetsDetail,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.editOutLet.path,
    Component: EditOutLets,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.helperList.path,
    Component: HelperList,
  },
  {
    path: PRIVATE_ROUTES.vendorManage.outLetDetail.path,
    Component: OutLetDetail,
  },
  {
    path: PRIVATE_ROUTES.driverManage.createDriver.path,
    Component: CreateDriver,
  },
  {
    path: PRIVATE_ROUTES.driverManage.driverList.path,
    Component: DriverList,
  },
  {
    path: PRIVATE_ROUTES.driverManage.editDriver.path,
    Component: EditDriver,
  },
  {
    path: PRIVATE_ROUTES.waiterManage.createWaiter.path,
    Component: CreateWaiter,
  },
  {
    path: PRIVATE_ROUTES.waiterManage.editWaiter.path,
    Component: EditWaiter,
  },
  {
    path: PRIVATE_ROUTES.waiterManage.waiterList.path,
    Component: WaiterList,
  },
  {
    path: PRIVATE_ROUTES.vendorManageJawafa.createVendorJawafa.path,
    Component: CreateVendorJawafa,
  },
  {
    path: PRIVATE_ROUTES.vendorManageJawafa.vendorListJawafa.path,
    Component: VendorListJawafa,
  },
  {
    path: PRIVATE_ROUTES.vendorManageJawafa.vendorDetailJawafa.path,
    Component: VendorDetailJawafa,
  },
  {
    path: PRIVATE_ROUTES.userManage.userList.path,
    Component: UserList,
  },
  {
    path: PRIVATE_ROUTES.userManage.editUser.path,
    Component: EditUser,
  },
  {
    path: PRIVATE_ROUTES.riderManage.riderList.path,
    Component: RiderList,
  },
  {
    path: PRIVATE_ROUTES.riderManage.riderEditUser.path,
    Component: RiderEditUser,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.businessCategory.path,
    Component: BusinessCategory,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.businessType.path,
    Component: BusinessType,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.houseDeliveryService.path,
    Component: HouseDeliveryService,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.openStatus.path,
    Component: OpenStatus,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.alcohol.path,
    Component: Alcohol,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.whoYouServe.path,
    Component: WhoYouServe,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.menuService.path,
    Component: MenuService,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.seating.path,
    Component: Seating,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.paymentMethod.path,
    Component: PaymentMethod,
  },
  {
    path: PRIVATE_ROUTES.mainCategories.cuisine.path,
    Component: Cuisine,
  },

  {
    path: PRIVATE_ROUTES.locationManage.addLocation.path,
    Component: AddLocation,
  },
  {
    path: PRIVATE_ROUTES.locationManage.helper.path,
    Component: Helper,
  },
  {
    path: PRIVATE_ROUTES.locationManage.editMainCategories.path,
    Component: EditMainCategories,
  },
  {
    path: PRIVATE_ROUTES.menuManage.menuList.path,
    Component: MenuList
  },
  {
    path: PRIVATE_ROUTES.menuManage.menuVendorOutlets.path,
    Component:MenuVendorOutlets
  },
  {
    path: PRIVATE_ROUTES.menuManage.outLetsSchedulePreparation.path,
    Component:OutLetsSchedulePreparation
  },
  {
    path: PRIVATE_ROUTES.documentManage.addDocumentForm.path,
    Component: AddDocumentForm
  },
  {
    path: PRIVATE_ROUTES.documentManage.document.path,
    Component: Document
  },
  {
    path: PRIVATE_ROUTES.vehicleManage.vehicleType.path,
    Component: VehicleType
  },
  {
    path: PRIVATE_ROUTES.vehicleManage.vehicleMakeManagement.path,
    Component: VehicleMakeManagement
  },
  {
    path: PRIVATE_ROUTES.fareManage.fareManagement.path,
    Component: FareManagement
  },
  {
    path: PRIVATE_ROUTES.fareManage.manageFareManagement.path,
    Component:ManageFareManagement
  },
  {
    path: PRIVATE_ROUTES.fareManage.editFareManagement.path,
    Component:EditFareManagement
  },
  {
    path: PRIVATE_ROUTES.commissionManage.feesManagement.path,
    Component:FeesManagement
  },
  {
    path: PRIVATE_ROUTES.referralManage.referralDocuments.path,
    Component:ReferralDocuments
  },
  {
    path: PRIVATE_ROUTES.referralManage.referralEdit.path,
    Component:ReferralEdit
  },
  {
    path: PRIVATE_ROUTES.statementsManage.overAllStatements.path,
    Component:OverAllStatements
  },
  {
    path: PRIVATE_ROUTES.statementsManage.statementsDetail.path,
    Component:StatementsDetail
  },
  {
    path: PRIVATE_ROUTES.statementsManage.dispatcherStatements.path,
    Component:DispatcherStatements
  },
  {
    path: PRIVATE_ROUTES.statementsManage.driverStatements.path,
    Component:DriverStatements
  },
  {
    path: PRIVATE_ROUTES.statementsManage.waiterStatements.path,
    Component:WaiterStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.agentStatements.path,
    Component:AgentStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.vendorStatements.path,
    Component:VendorStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.outLetStatements.path,
    Component:OutLetStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.waiterListStatements.path,
    Component:WaiterListStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.driverListStatements.path,
    Component:DriverListStatements
  },
  {
    path: PRIVATE_ROUTES.adminManageXP.helperStatements.path,
    Component:HelperStatements
  },
  {
    path: PRIVATE_ROUTES.cancellationReasonManage.addNewReason.path,
    Component:AddNewReason
  },
  {
    path: PRIVATE_ROUTES.cancellationReasonManage.reasonList.path,
    Component:ReasonList
  },
  {
    path: PRIVATE_ROUTES.cancellationReasonManage.reasonDetails.path,
    Component:ReasonDetails
  },
  {
    path: PRIVATE_ROUTES.userGuideManage.addUserGuide.path,
    Component:AddUserGuide
  },
  {
    path: PRIVATE_ROUTES.userGuideManage.userGuideList.path,
    Component:UserGuideList
  },
  {
    path: PRIVATE_ROUTES.userGuideManage.userGuideDetails.path,
    Component:UserGuideDetails
  },
  {
    path: PRIVATE_ROUTES.complaintsManage.companions.path,
    Component:Companions
  },
  {
    path: PRIVATE_ROUTES.complaintsManage.companionsOverAllStatements.path,
    Component:CompanionsOverAllStatements
  },
  {
    path: PRIVATE_ROUTES.helpAndSupportManage.helpCompanions.path,
    Component:HelpCompanions
  },
  {
    path: PRIVATE_ROUTES.accountManage.account.path,
    Component:Account
  },
  {
    path: PRIVATE_ROUTES.reportsManage.reportCompanions.path,
    Component:ReportCompanions
  },
  
];