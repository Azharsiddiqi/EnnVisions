import { PRIVATE_ROUTES } from '../routes';

const {
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
  menuManage,
  documentManage,
  vehicleManage,
  fareManage,
  commissionManage,
  referralManage,
  statementsManage,
  adminManageXP,
  cancellationReasonManage,
  userGuideManage,
  complaintsManage,
  helpAndSupportManage,
  accountManage,
  reportsManage,
} = PRIVATE_ROUTES;

export const SideBarMenuList = [
  {
    id: '0',
    title: 'User Roles',
    isActive: false,
    subMenu: [
      {
        id: '0.subMenu.0',
        title: 'Create New',
        path: userRoles.addNewRole.path,
        isActive: false
      },
      {
        id: '0.subMenu.1',
        title: 'User Roles',
        path: userRoles.userRoleList.path,
        isActive: false
      },
      {
        id: '0.subMenu.2',
        title: 'Manage Permissions',
        path: userRoles.createPermissions.path,
        isActive: false
      }
    ]
  },
  {
    id: '1',
    title: 'Admin Manage',
    isActive: false,
    subMenu: [
      {
        id: '1.subMenu.0',
        title: 'Create New',
        path: adminManage.createAdmin.path,
        isActive: false
      },
      {
        id: '1.subMenu.1',
        title: 'DoorBud',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.subMenu.2',
        title: 'Jawafa',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.subMenu.3',
        title: 'Jimmy Guaco\'s',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.subMenu.4',
        title: 'XP Eats',
        path: adminManage.adminDetail.path,
        isActive: false
      },
    ]
  },
  {
    id: '2',
    title: 'Fleet Manage',
    isActive: false,
    subMenu: [
      {
        id: '2.subMenu.0',
        title: 'Create New',
        path: fleetManage.createFleet.path,
        isActive: false
      },
      {
        id: '2.subMenu.1',
        title: 'DoorBud',
        path: fleetManage.fleetDetail.path,
        isActive: false
      },
      {
        id: '2.subMenu.2',
        title: 'jawafa',
        path: fleetManage.fleetDetail.path,
        isActive: false
      },
      {
        id: '2.subMenu.3',
        title: 'Jimmy Guaco\'s ',
        path: fleetManage.fleetDetail.path,
        isActive: false
      },
    ]
  },
  {
    id: '3',
    title: 'Dispatcher Manage ',
    isActive: false,
    subMenu: [
      {
        id: '3.subMenu.0',
        title: 'Create New',
        path: dispatcherManage.createDispatcher.path,
        isActive: false
      },
      {
        id: '3.subMenu.1',
        title: 'DoorBud',
        path: dispatcherManage.dispatcherDetail.path,
        isActive: false
      },
      {
        id: '3.subMenu.2',
        title: 'jawafa',
        path: dispatcherManage.dispatcherDetail.path,
        isActive: false
      },
      {
        id: '3.subMenu.3',
        title: 'Jimmy Guaco\'s ',
        path: dispatcherManage.dispatcherDetail.path,
        isActive: false
      },
    ]
  },
  {
    id: '4',
    title: 'Vendor Manage ',
    isActive: false,
    subMenu: [
      {
        id: '4.subMenu.0',
        title: 'DoorBud',
        path: vendorManage.vendorDetail.path,
        isActive: false
      },
      {
        id: '4.subMenu.1',
        title: 'Jawafa ',
        isActive: false,
        subMenu: [
          {
            id: '4.subMenu.1.subMenu.0',
            title: 'Create vendor ',
            path: vendorManage.createVendor.path,
            isActive: false
          },
          {
            id: '4.subMenu.1.subMenu.1',
            title: 'Vendor list ',
            path: vendorManage.vendorList.path,
            isActive: false
          },
          {
            id: '4.subMenu.1.subMenu.2',
            title: 'Helper List ',
            path: vendorManage.helperList.path,
            isActive: false
          },
        ]
      },
      {
        id: '4.subMenu.2',
        title: 'Jimmy Guaco\'s ',
        path: vendorManage.vendorDetail.path,
        isActive: false
      },
    ]
  },
  {
    id: '5',
    title: 'Driver Manage ',
    isActive: false,
    subMenu: [
      {
        id: '5.subMenu.0',
        title: 'DoorBud',
        path: '#',
        isActive: false
      },
      {
        id: '5.subMenu.1',
        title: 'Jawafa ',
        isActive: false,
        subMenu: [
          {
            id: '5.subMenu.1.subMenu.0',
            title: 'Admin Driver ',
            isActive: false,
            subMenu: [
              {
                id: '5.subMenu.1.subMenu.0.subMenu.0',
                title: 'Vendor Driver ',
                isActive: false,
                subMenu: [
                  {
                    id: '5.subMenu.1.subMenu.0.subMenu.0.subMenu.0',
                    title: 'New Driver ',
                    path: driverManage.createDriver.path,
                    isActive: false
                  },
                  {
                    id: '5.subMenu.1.subMenu.0.subMenu.0.subMenu.1',
                    title: 'Driver List',
                    path: driverManage.driverList.path,
                    isActive: false
                  }
                ]
              },
              {
                id: '5.subMenu.1.subMenu.0.subMenu.1',
                title: 'Fleet Driver ',
                isActive: false,
                subMenu: [
                  {
                    id: '5.subMenu.1.subMenu.0.subMenu.1.subMenu.0',
                    title: 'New Driver ',
                    path: driverManage.createDriver.path,
                    isActive: false
                  },
                  {
                    id: '5.subMenu.1.subMenu.0.subMenu.1.subMenu.1',
                    title: 'Driver List',
                    path: driverManage.driverList.path,
                    isActive: false
                  },
                ]
              },

            ]
          },
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Waiter Manage ',
    isActive: false,
    subMenu: [
      {
        id: '6.subMenu.0',
        title: 'DoorBud',
        path: '#',
        isActive: false
      },
      {
        id: '6.subMenu.1',
        title: 'Jawafa ',
        isActive: false,
        subMenu: [
          {
            id: '6.subMenu.1.subMenu.0',
            title: 'Admin Waiter ',
            isActive: false,
            subMenu: [
              {
                id: '6.subMenu.1.subMenu.0.subMenu.0',
                title: 'Vendor Waiter ',
                isActive: false,
                subMenu: [
                  {
                    id: '6.subMenu.1.subMenu.0.subMenu.0.subMenu.0',
                    title: 'New Waiter ',
                    path: waiterManage.createWaiter.path,
                    isActive: false
                  },
                  {
                    id: '6.subMenu.1.subMenu.0.subMenu.0.subMenu.1',
                    title: 'Waiter List',
                    path: waiterManage.waiterList.path,
                    isActive: false
                  }
                ]
              },
              {
                id: '6.subMenu.1.subMenu.0.subMenu.1',
                title: 'Fleet Waiter ',
                isActive: false,
                subMenu: [
                  {
                    id: '6.subMenu.1.subMenu.0.subMenu.1.subMenu.0',
                    title: 'New Waiter ',
                    path: waiterManage.createWaiter.path,
                    isActive: false
                  },
                  {
                    id: '6.subMenu.1.subMenu.0.subMenu.1.subMenu.1',
                    title: 'Waiter List',
                    path: waiterManage.waiterList.path,
                    isActive: false
                  },
                ]
              },

            ]
          },
        ]
      }
    ]
  },
  {
    id:'7',
    title: 'Vendor Manage',
    isActive: false,
    subMenu: [
      {
        id:'7.subMenu.0',
        title: 'DoorBud',
        path: '#',
        isActive: false
      },
      {
        id:'7.subMenu.1',
        title: 'Jawafa',
        isActive: false,
        subMenu: [
          {
            id:'7.subMenu.1.subMenu.0',
            title: 'Create Vendor',
            path: vendorManageJawafa.createVendorJawafa.path,
            isActive: false
          },
          {
            id:'7.subMenu.1.subMenu.1',
            title: 'Vendor List',
            path: vendorManageJawafa.vendorListJawafa.path,
            isActive: false
          },

        ]

      },
      {
        id:'7.subMenu.2',
        title: 'Jawafa',
        path: '#',
        isActive: false
      }, {
        id:'7.subMenu.3',
        title: 'Jimmy Guaco\'s',
        path: '#',
        isActive: false
      },
    ]
  },
  {
    id:'8',
    title: 'User Manage',
    isActive: false,
    subMenu: [
      {
        id:'8.subMenu.0',
        title: 'DoorBud',
        path: userManage.userList.path,
        isActive: false
      },
      {
        id:'8.subMenu.1',
        title: 'Jawafa',
        path: userManage.userList.path,
        isActive: false
      },
      {
        id:'8.subMenu.2',
        title: 'jimmy Guaco\'s',
        path: userManage.userList.path,
        isActive: false
      },
    ]
  },
  {
    id:'9',
    title: 'Rider Manage ',
    isActive: false,
    subMenu: [
      {
        id:'9.subMenu.0',
        title: 'DoorBud',
        path: riderManage.riderList,
        isActive: false
      },
      {
        id:'9.subMenu.1',
        title: 'Jawafa',
        path: riderManage.riderList,
        isActive: false
      },
      {
        id:'9.subMenu.2',
        title: 'jimmy Guaco\'s',
        path: riderManage.riderList,
        isActive: false
      },
    ]
  },
  {
    id:'10',
    title: 'Main Categories',
    isActive: false,
    subMenu: [
      {
        id:'10.subMenu.0',
        title: 'Business Category',
        path: mainCategories.businessCategory.path,
        isActive: false
      },
      {
        id:'10.subMenu.1',
        title: 'Business Type',
        path: mainCategories.businessType.path,
        isActive: false
      },
      {
        id:'10.subMenu.2',
        title: 'House Delivery Service',
        path: mainCategories.houseDeliveryService.path,
        isActive: false
      },
      {
        id:'10.subMenu.3',
        title: 'Open Status',
        path: mainCategories.openStatus.path,
        isActive: false
      },
      {
        id:'10.subMenu.4',
        title: 'Alcohol',
        path: mainCategories.alcohol.path,
        isActive: false
      },
      {
        id:'10.subMenu.5',
        title: 'Who You Serve',
        path: mainCategories.whoYouServe.path,
        isActive: false
      },
      {
        id:'10.subMenu.6',
        title: 'Menu Service',
        path: mainCategories.menuService.path,
        isActive: false
      },
      {
        id:'10.subMenu.7',
        title: 'Seating',
        path: mainCategories.seating.path,
        isActive: false
      },
      {
        id:'10.subMenu.8',
        title: 'Payment Method',
        path: mainCategories.paymentMethod.path,
        isActive: false
      },
      {
        id:'10.subMenu.9',
        title: 'Cuisine',
        path: mainCategories.cuisine.path,
        isActive: false
      },
    ]
  },
  {
    id:'11',
    title: 'Location Mange ',
    isActive: false,
    subMenu: [
      {
        id:'11.subMenu.0',
        title: 'Add New Category',
        path: locationManage.addLocation.path,
        isActive: false
      },
      {
        id:'11.subMenu.1',
        title: 'DoorBud',
        path: locationManage.helper.path,
        isActive: false
      },
      {
        id:'11.subMenu.2',
        title: 'Jawafa',
        path: locationManage.helper.path,
        isActive: false
      },
      {
        id:'11.subMenu.3',
        title: 'Jimmy Guaco\'s',
        path: locationManage.helper.path,
        isActive: false
      },
    ]
  },
  {
    id:'12',
    title: 'Menu Manage ',
    isActive: false,
    subMenu: [
      {
        id:'12.subMenu.0',
        title: 'Grocery',
        path: menuManage.menuList.path,
        isActive: false
      },
      {
        id:'12.subMenu.1',
        title: 'Restaurant',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'12.subMenu.2',
        title: 'Pharma',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'12.subMenu.3',
        title: 'Vegetable',
        path: driverManage.createDriver.path,
        isActive: false
      },
    ]
  },
  {
    id:'13',
    title: 'Order Manage (Driver) ',
    isActive: false,
    subMenu: [
      {
        id:'13.subMenu.0',
        title: 'Grocery',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'13.subMenu.1',
        title: 'Restaurant',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'13.subMenu.2',
        title: 'Pharma',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'13.subMenu.3',
        title: 'Vegetable',
        path: driverManage.createDriver.path,
        isActive: false
      },
    ]
  },
  {
    id:'14',
    title: 'Order Manage (Waiter) ',
    isActive: false,
    subMenu: [
      {
        id:'14.subMenu.0',
        title: 'Grocery',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'14.subMenu.1',
        title: 'Restaurant',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'14.subMenu.2',
        title: 'Pharma',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'14.subMenu.3',
        title: 'Vegetable',
        path: driverManage.createDriver.path,
        isActive: false
      },
    ]
  },
  {
    id:'15',
    title: 'Document Manage',
    isActive: false,
    subMenu: [
      {
        id:'15.subMenu.0',
        title: 'Create New',
        path: documentManage.addDocumentForm.path,
        isActive: false
      },
      {
        id:'15.subMenu.1',
        title: 'Admin',
        path: documentManage.document.path,
        isActive: false
      },
      {
        id:'15.subMenu.2',
        title: 'Fleet',
        path: documentManage.document.path,
        isActive: false
      },
      {
        id:'15.subMenu.3',
        title: 'Dispatcher',
        path: documentManage.document.path,
        isActive: false
      },
      {
        id:'15.subMenu.4',
        title: 'Driver',
        path: documentManage.document.path,
        isActive: false
      }
    ]
  },
  {
    id:'16',
    title: 'Vehicle Manage',
    isActive: false,
    subMenu: [
      {
        id:'16.subMenu.0',
        title: 'Vehicle Type',
        path: vehicleManage.vehicleType.path,
        isActive: false
      },
      {
        id:'16.subMenu.1',
        title: 'Vehicle Company',
        path: vehicleManage.vehicleMakeManagement.path,
        isActive: false
      },
      {
        id:'16.subMenu.2',
        title: 'Vehicle Model',
        path: '#',
        isActive: false
      },

    ]
  },
  {
    id:'17',
    title: 'Fare Manage',
    isActive: false,
    subMenu: [
      {
        id:'17.subMenu.0',
        title: 'Driver',
        isActive: false,
        subMenu: [
          {
            id:'17.subMenu.0.SubMenu.0',
            title: 'Add New ',
            path: fareManage.fareManagement.path,
            isActive: false
          },
          {
            id:'17.subMenu.0.SubMenu.1',
            title: 'Fare List',
            path: fareManage.manageFareManagement.path,
            isActive: false
          }
        ]
      },
      {
        id:'17.subMenu.1',
        title: 'Waiter',
        isActive: false,
        subMenu: [
          {
            id:'17.subMenu.1.subMenu.0',
            title: 'Add New ',
            path: fareManage.fareManagement.path,
            isActive: false
          },

          {
            id:'17.subMenu.1.subMenu.1',
            title: 'Fare List',
            path: fareManage.manageFareManagement.path,
            isActive: false
          }
        ]
      },


    ]
  },
  {
    id:'18',
    title: 'Commission Mange',
    isActive: false,
    subMenu: [
      {
        id:'18.subMenu.0',
        title: 'Admin',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.1',
        title: 'Fleet',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.2',
        title: 'Vendor',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.3',
        title: 'Dispatcher',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.4',
        title: 'Driver',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.5',
        title: 'Waiter',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.6',
        title: 'User',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.7',
        title: 'Rider',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.8',
        title: 'Helper',
        path: commissionManage.feesManagement.path,
        isActive: false
      },
      {
        id:'18.subMenu.9',
        title: 'Data Analyst',
        path: commissionManage.feesManagement.path,
        isActive: false
      }
    ]
  },
  {
    id:'19',
    title: 'Referral Manage',
    isActive: false,
    subMenu: [
      {
        id:'19.subMenu.0',
        title: 'Admin',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.1',
        title: 'Fleet',
        path: referralManage.referralDocuments.path,
        isActive: false
      },

      {
        id:'19.subMenu.2',
        title: 'Dispatcher',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.3',
        title: 'Driver',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.4',
        title: 'Waiter',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.5',
        title: 'User',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.6',
        title: 'Rider',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.7',
        title: 'Helper',
        path: referralManage.referralDocuments.path,
        isActive: false
      },
      {
        id:'19.subMenu.8',
        title: 'Data Analyst',
        path: referralManage.referralDocuments.path,
        isActive: false
      }
    ]
  },
  {
    id:'20',
    title: 'Statements Manage',
    isActive: false,
    subMenu: [
      {
        id:'20.subMenu.0',
        title: 'Overall Order',
        path: statementsManage.overAllStatements.path,
        isActive: false
      },
      {
        id:'20.subMenu.1',
        title: 'Fleet Manage',
        isActive: false,
        subMenu: [
          {
            id:'20.subMenu.1.subMenu.0',
            title: 'A1 Ride',
            isActive: false,
            subMenu: [
              {
                id:'20.subMenu.1.subMenu.0.subMenu.0',
                title: 'Dispatcher',
                path: statementsManage.dispatcherStatements.path,
                isActive: false
              },
              {
                id:'20.subMenu.1.subMenu.0.subMenu.1',
                title: 'Driver',
                path: statementsManage.driverStatements.path,
                isActive: false
              },
              {
                id:'20.subMenu.1.subMenu.0.subMenu.2',
                title: 'Waiter',
                path: statementsManage.waiterStatements.path,
                isActive: false
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id:'21',
    title: 'Admin Manage',
    isActive: false,
    subMenu: [
      {
        id:'21.subMenu.0',
        title:'XP Eats',
        isActive:false,
        subMenu:[
          {
            id:'21.subMenu.0.subMenu.0',
            title:'Agent',
            path:adminManageXP.agentStatements.path,
            isActive:false,
          },
          {
            id:'21.subMenu.0.subMenu.1',
            title:'Vendor',
            path:adminManageXP.vendorStatements.path,
            isActive:false,
          },
        ]
      },
      {
        id:'21.subMenu.1',
        title:'Vendor',
        isActive:false,
        subMenu: [
          {
            id :'21.subMenu.1.subMenu.0',
            title:'Out Let',
            path:adminManageXP.outLetStatements.path,
            isActive:false,
          },
          {
            id :'21.subMenu.1.subMenu.1',
            title:'Helper',
            path:adminManageXP.helperStatements.path,
            isActive:false,
          },
          {
            id :'21.subMenu.1.subMenu.2',
            title:'Waiter',
            path:adminManageXP.waiterListStatements.path,
            isActive:false,
          },
          {
            id :'21.subMenu.1.subMenu.3',
            title:'Driver',
            path:adminManageXP.driverListStatements.path,
            isActive:false,
          },
        ]
      },
    ]
  },
  {
    id:'22',
    title: 'Cancellation Reason Manage',
    isActive: false,
    subMenu: [
      {
        id:'22.subMenu.0',
        title: 'Add New',
        path: cancellationReasonManage.addNewReason.path,
        isActive: false
      },

      {
        id:'22.subMenu.1',
        title: 'Admin',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.2',
        title: 'Fleet',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.3',
        title: 'Dispatcher',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },

      {
        id:'22.subMenu.4',
        title: 'Driver',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.5',
        title: 'Waiter',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.6',
        title: 'User',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.7',
        title: 'Rider',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.8',
        title: 'Helper',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      },
      {
        id:'22.subMenu.9',
        title: 'Data Analyst',
        path: cancellationReasonManage.reasonList.path,
        isActive: false
      }
    ]
  },
  {
    id:'23',
    title: 'User Guide Manage',
    isActive: false,
    subMenu: [
      {
        id:'23.subMenu.0',
        title: 'Add New',
        path: userGuideManage.addUserGuide.path,
        isActive: false
      },

      {
        id:'23.subMenu.1',
        title: 'Admin',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.2',
        title: 'Fleet',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.3',
        title: 'Vendor',
        path: userGuideManage.userGuideList.path, 
        isActive: false
      },
      {
        id:'23.subMenu.4',
        title: 'Vendor',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },

      {
        id:'23.subMenu.5',
        title: 'Dispatcher',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },

      {
        id:'23.subMenu.6',
        title: 'Driver',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.7',
        title: 'Waiter',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.8',
        title: 'User',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.9',
        title: 'Rider',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.10',
        title: 'Helper',
        path: userGuideManage.userGuideList.path,
        isActive: false
      },
      {
        id:'23.subMenu.11',
        title: 'Data Analyst',
        path: userGuideManage.userGuideList.path,
        isActive: false
      }
    ]
  },
  {
    id:'24',
    title: 'Complaints Manage',
    isActive: false,
    subMenu: [

      {
        id:'24.subMenu.0',
        title: 'Admin',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.1',
        title: 'Fleet',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.2',
        title: 'Dispatcher',
        path: complaintsManage.companions.path,
        isActive: false
      },

      {
        id:'24.subMenu.3',
        title: 'Driver',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.4',
        title: 'Waiter',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.5',
        title: 'User',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.6',
        title: 'Rider',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.7',
        title: 'Helper',
        path: complaintsManage.companions.path,
        isActive: false
      },
      {
        id:'24.subMenu.8',
        title: 'Data Analyst',
        path: complaintsManage.companions.path,
        isActive: false
      }
    ]
  }, 
  {
    id:'25',
    title: 'Help & Support Manage',
    isActive: false,
    subMenu: [

      {
        id:'25.subMenu.0',
        title: 'Admin',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.1',
        title: 'Fleet',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.2',
        title: 'Dispatcher',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },

      {
        id:'25.subMenu.3',
        title: 'Driver',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.4',
        title: 'Waiter',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.5',
        title: 'User',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.6',
        title: 'Rider',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.7',
        title: 'Helper',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      },
      {
        id:'25.subMenu.8',
        title: 'Data Analyst',
        path: helpAndSupportManage.helpCompanions.path,
        isActive: false
      }
    ]
  },
  {
    id:'26',
    title: 'Account Manage',
    isActive: false,
    subMenu: [

      {
        id:'26.subMenu.0',
        title: 'Admin',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.1',
        title: 'Fleet',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.2',
        title: 'Dispatcher',
        path: accountManage.account.path,
        isActive: false
      },

      {
        id:'26.subMenu.3',
        title: 'Driver',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.4',
        title: 'Waiter',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.5',
        title: 'User',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.6',
        title: 'Rider',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.7',
        title: 'Helper',
        path: accountManage.account.path,
        isActive: false
      },
      {
        id:'26.subMenu.8',
        title: 'Data Analyst',
        path: accountManage.account.path,
        isActive: false
      }
    ]
  },
  {
    id:'27',
    title: 'Report Manage',
    isActive: false,
    subMenu: [

      {
        id:'27.subMenu.0',
        title: 'Admin',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.1',
        title: 'Fleet',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.2',
        title: 'Dispatcher',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },

      {
        id:'27.subMenu.3',
        title: 'Driver',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.4',
        title: 'Waiter',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.5',
        title: 'User',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.6',
        title: 'Rider',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.7',
        title: 'Helper',
        path: reportsManage.reportCompanions.path,
        isActive: false
      },
      {
        id:'27.subMenu.8',
        title: 'Data Analyst',
        path: reportsManage.reportCompanions.path,
        isActive: false
      }
    ]
  },
  {
    id:'28',
    title: 'Data Analyst Manage',
    isActive: false,
    subMenu: [

      {
        id:'28.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'28.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.5',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.6',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.7',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'28.subMenu.8',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'29',
    title: 'Media Gallery',
    isActive: false,
    subMenu: [

      {
        id:'29.subMenu.0',
        title: 'Grocery',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'29.subMenu.1',
        title: 'Restaurant',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'29.subMenu.1',
        title: 'Pharma',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'29.subMenu.2',
        title: 'Vegetable',
        path: driverManage.createDriver.path,
        isActive: false
      },
    ]
  },
  {
    id:'30',
    title: 'Offer Manage',
    isActive: false,
    subMenu: [

      {
        id:'30.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'30.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.5',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.6',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.7',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'30.subMenu.8',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'31',
    title: 'Promotion Manage',
    isActive: false,
    subMenu: [

      {
        id:'31.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'31.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.5',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.6',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.7',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'31.subMenu.8',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'32',
    title: 'SMS Manage',
    isActive: false,
    subMenu: [

      {
        id:'32.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'32.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.5',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.6',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.7',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'32.subMenu.8',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'33',
    title: 'Email Manage',
    isActive: false,
    subMenu: [

      {
        id:'33.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.0',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.1',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'33.subMenu.2',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.3',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.4',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.5',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.6',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'33.subMenu.7',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'34',
    title: 'Refund Manage',
    isActive: false,
    subMenu: [

      {
        id:'34.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.0',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.1',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'34.subMenu.2',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.3',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.3',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.4',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.5',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'34.subMenu.6',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'35',
    title: 'Penalty Manage',
    isActive: false,
    subMenu: [

      {
        id:'35.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.0',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.1',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'35.subMenu.2',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.3',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.4',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.5',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.6',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'35.subMenu.7',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'36',
    title: 'Tips Manage',
    isActive: false,
    subMenu: [

      {
        id:'36.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'36.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'36.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'36.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'36.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'36.subMenu.5',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      }

    ]
  },
  {
    id:'37',
    title: 'Peak Base Fare Manage',
    isActive: false,
    subMenu: [
      {
        id:'37.subMenu.0',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'37.subMenu.1',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'37.subMenu.2',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'37.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'37.subMenu.4',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  },
  {
    id:'38',
    title: 'FAQ Manage',
    isActive: false,
    subMenu: [

      {
        id:'38.subMenu.0',
        title: 'Admin',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.1',
        title: 'Fleet',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.2',
        title: 'Dispatcher',
        path: driverManage.createDriver.path,
        isActive: false
      },

      {
        id:'38.subMenu.3',
        title: 'Driver',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.4',
        title: 'Waiter',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.5',
        title: 'User',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.6',
        title: 'Rider',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.7',
        title: 'Helper',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'38.subMenu.8',
        title: 'Data Analyst',
        path: driverManage.createDriver.path,
        isActive: false
      }
    ]
  }
];