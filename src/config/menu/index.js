import { PRIVATE_ROUTES } from '../routes';

const {
  userRoles,
  adminManage,
  fleetManage,
  dispatcherManage,
  vendorManage,
  driverManage,
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
        id: '1.0',
        title: 'Create New',
        path: adminManage.createAdmin.path,
        isActive: false
      },
      {
        id: '1.1',
        title: 'DoorBud',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.2',
        title: 'Jawafa',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.3',
        title: 'Jimmy Guaco\'s',
        path: adminManage.adminDetail.path,
        isActive: false
      },
      {
        id: '1.4',
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
        id: '2.0',
        title: 'Create New',
        path: fleetManage.createFleet.path,
        isActive: false
      },
      {
        id: '2.1',
        title: 'DoorBud',
        path: fleetManage.fleetDetail.path,
        isActive: false
      },
      {
        id: '2.2',
        title: 'jawafa',
        path: fleetManage.fleetDetail.path,
        isActive: false
      },
      {
        id: '2.3',
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
        id: '3.0',
        title: 'Create New',
        path: dispatcherManage.createDispatcher.path,
        isActive: false
      },
      {
        id: '3.1',
        title: 'DoorBud',
        path: dispatcherManage.dispatcherDetail.path,
        isActive: false
      },
      {
        id: '3.2',
        title: 'jawafa',
        path: dispatcherManage.dispatcherDetail.path,
        isActive: false
      },
      {
        id: '3.3',
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
        id: '4.0',
        title: 'DoorBud',
        path: vendorManage.vendorDetail.path,
        isActive: false
      },
      {
        id: '4.1',
        title: 'Jawafa ',
        isActive: false,
        subMenu: [
          {
            id: '4.1.0',
            title: 'Create vendor ',
            path: vendorManage.createVendor.path,
            isActive: false
          },
          {
            id: '4.1.1',
            title: 'Vendor list ',
            path: vendorManage.vendorList.path,
            isActive: false
          },
          {
            id: '4.1.2',
            title: 'Helper List ',
            path: vendorManage.helperList.path,
            isActive: false
          },
        ]
      },
      {
        id: '4.2',
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
                    path: driverManage.createDriver.path,
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
                    path: driverManage.createDriver.path,
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
  // {
  //   title: 'Waiter Manage ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'DoorBud',
  //       path: driverManage.dispatcherDetail.path,
  //       isActive: false
  //     },

  //     {
  //       title: 'Jawafa ',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'Admin Waiter ',
  //           isActive: false,
  //           subMenu: [
  //             {
  //               title: 'Vendor Waiter ',
  //               isActive: false,
  //               subMenu: [
  //                 {
  //                   title: 'New Waiter ',
  //                   path: driverManage.createDriver.path,
  //                   isActive: false
  //                 },

  //                 {
  //                   title: 'Waiter List',
  //                   path: driverManage.createDriver.path,
  //                   isActive: false
  //                 },

  //               ]
  //             },

  //             {
  //               title: 'Fleet Waiter ',
  //               isActive: false,
  //               subMenu: [
  //                 {
  //                   title: 'New Waiter ',
  //                   path: driverManage.createDriver.path,
  //                   isActive: false
  //                 },

  //                 {
  //                   title: 'Waiter List',
  //                   path: driverManage.createDriver.path,
  //                   isActive: false
  //                 },

  //               ]
  //             },

  //           ]
  //         },

  //       ]
  //     },


  //   ]
  // },
  // {
  //   title: 'Vendor Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'DoorBud',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Jawafa',
  //       isActive: false,
  //       subMenu: [
  //         {
  //           title: 'Create Vendor',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         },
  //         {
  //           title: 'Vendro List',
  //           path: driverManage.createDriver.path,
  //           isActive: false
  //         },

  //       ]

  //     },
  //     {
  //       title: 'Jawafa',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     }, {
  //       title: 'Jimmy Guaco\'s',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'User Manage',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'DoorBud',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Jawafa',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'jimmy Guaco\'s',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Rider Manage ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'DoorBud',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Jawafa',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'jimmy Guaco\'s',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
  // {
  //   title: 'Main Categories',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Add New Category',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
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
  //   title: 'Location Mange ',
  //   isActive: false,
  //   subMenu: [
  //     {
  //       title: 'Add New Category',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'DoorBud',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Jawafa',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //     {
  //       title: 'Jimmy Guaco\'s',
  //       path: driverManage.createDriver.path,
  //       isActive: false
  //     },
  //   ]
  // },
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