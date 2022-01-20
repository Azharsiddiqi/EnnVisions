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

];