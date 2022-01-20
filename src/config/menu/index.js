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
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'11.subMenu.2',
        title: 'Jawafa',
        path: driverManage.createDriver.path,
        isActive: false
      },
      {
        id:'11.subMenu.3',
        title: 'Jimmy Guaco\'s',
        path: driverManage.createDriver.path,
        isActive: false
      },
    ]
  },
  // {
  //   title: 'Menu Manage ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Grocery',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  // //       title: 'Restaurant',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Pharma',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vegetable',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Order Manage (Driver) ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Grocery',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Restaurant',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Pharma',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vegetable',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Order Manage (Waiter) ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Grocery',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Restaurant',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Pharma',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vegetable',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Document Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Create New',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Vehicle Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Vehicle Type',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vehicle Company',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vehicle Model',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //   ]
  // },
  // {
  //   title: 'Fare Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Driver',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'Add New ',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         },
  //         {
  //           title: 'Fare List',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         }
  //       ]
  //     },



  //     {
  //       title: 'Waiter',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'Add New ',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         },

  //         {
  //           title: 'Fare List',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         }
  //       ]
  //     },


  //   ]
  // },
  // {
  //   title: 'Commission Mange',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vendor',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Referral Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Statements Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Overall Order',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet Manage',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'A1 Ride',
  //           isActive: false,
  //           subMenu: [
  //             {
  //               title: 'Dispatcher',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //             {
  //               title: 'Driver',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //             {
  //               title: 'Waiter',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Admin Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'XP Eats',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'Agent',
  //           isActive: false,
  //           subMenu: [
  //             {
  //               title: 'Vendor',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             }
  //           ]
  //         },
  //         {
  //           title: 'Vendor',
  //           isActive: false,
  //           subMenu: [
  //             {
  //               title: 'Out Let',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //             {
  //               title: 'Helper',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //             {
  //               title: 'Waiter',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //             {
  //               title: 'Driver',
  //               path: driverManage.createDriver.path,
  //               isActive: false
  //             },
  //           ]
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Cancellation Reason Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Add New',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Complaints Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'User Guide Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Add New',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vendor',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vendor',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Complaints Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vendor',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Vendor',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Help & Support Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Account Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Report Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Data Analyst Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Media Gallery',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Grocery',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Restaurant',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Pharma',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Vegetable',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Offer Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Promotion Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'SMS Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Email Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Refund Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Penalty Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'Tips Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }

  //   ]
  // },
  // {
  //   title: 'Peak Base Fare Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // },
  // {
  //   title: 'FAQ Manage',
  //   isActive: false,
  //   subMenu: [

  //     {
  //       title: 'Admin',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Fleet',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Dispatcher',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Driver',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Waiter',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'User',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Rider',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Helper',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Data Analyst',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }
  //   ]
  // }
];