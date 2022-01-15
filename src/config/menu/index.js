import { PRIVATE_ROUTES } from '../routes';

const {
  dashboard,
  userRoles,
  adminManage,
  fleetManage,
  dispatcherManage,
  vendorManage,
  driverManage,



} = PRIVATE_ROUTES;

export const Menu = [
  {
    title: 'Dashboard',
    path: dashboard.path,
    isActive: false
  },
  {
    title: 'User Roles',
    isSubMenuActive: false,
    subMenu: [
      {
        title: 'Create New',
        path: userRoles.addNewRole.path
      },
      {
        title: 'User Roles',
        path: userRoles.userRoleList.path
      },
      {
        title: 'Manage Permissions',
        path: userRoles.createPermissions.path
      }
    ]
  },

  {
    title: 'Admin Manage',
    isSubMenuActive: false,
    subMenu: [
      {
        title: 'Create New',
        path: adminManage.createAdmin.path
      },
      {
        title: 'DoorBud',
        path: adminManage.adminDetail.path
      },
      {
        title: 'Jawafa',
        path: adminManage.adminDetail.path
      },
      {
        title: 'Jimmy Guaco\'s' ,
        path: adminManage.adminDetail.path
      },
      {
        title: 'XP Eats',
        path: adminManage.adminDetail.path
      },
    ]   
  },
  {
    title: 'Fleet Manage',
    isSubMenuActive: false,
    subMenu:[
      {
        title: 'Create New',
        path: fleetManage.createFleet.path
      },
          
      {
        title: 'DoorBud',
        path: fleetManage.fleetDetail.path
      },
      {
        title: 'jawafa',
        path: fleetManage.fleetDetail.path
      },
      {
        title: 'Jimmy Guaco\'s ',
        path: fleetManage.fleetDetail.path
      },
    ]
  },


  {
    title: 'Dispatcher Manage ',
    isSubMenuActive: false,
    subMenu:[
      {
        title: 'Create New',
        path: dispatcherManage.createDispatcher.path
      },
          
      {
        title: 'DoorBud',
        path: dispatcherManage.dispatcherDetail.path
      },
      {
        title: 'jawafa',
        path: dispatcherManage.dispatcherDetail.path
      },
      {
        title: 'Jimmy Guaco\'s ',
        path: dispatcherManage.dispatcherDetail.path
      },
    ]
  },



  {title: 'Vendor Manage ',
    isSubMenuActive: false,
    subMenu:[ 
      {
        title: 'DoorBud',
        path: vendorManage.dispatcherDetail.path
      },
      {
        title: 'Jawafa ',
        isSubMenuActive: false,
        subMenu:[ 
          {
            title: 'Create vendor ',
            path: vendorManage.createVendor.path
          },
          {
            title: 'Vendor list ',
            path: vendorManage.vendorList.path
          },
          {
            title: 'Helper List ',
            path: vendorManage.helperList.path
          },
        ]
      },
      {
        title: 'Jimmy Guaco\'s ',
        path: vendorManage.dispatcherDetail.path
      },
    ]
  },


  {
    title: 'Driver Manage ',
    isSubMenuActive: false,
    subMenu:[
      {
        title: 'DoorBud',
        path: driverManage.dispatcherDetail.path
      },
          
      {
        title: 'Jawafa ',
        isSubMenuActive: false,
        subMenu:[
          {
            title: 'Admin Driver ',
            isSubMenuActive: false,
            subMenu:[
              {
                title: 'Vendor Driver ',
                isSubMenuActive: false,
                subMenu:[
                  {
                    title: 'New Driver ',
                    path: driverManage.createDriver.path
                  },
                              
                  {
                    title: 'Driver List',
                    path: driverManage.createDriver.path
                  },
                      
                ]
              },
                      
              {
                title: 'Fleet Driver ',
                isSubMenuActive: false,
                subMenu:[
                  {
                    title: 'New Driver ',
                    path: driverManage.createDriver.path
                  },
                              
                  {
                    title: 'Driver List',
                    path: driverManage.createDriver.path
                  },
                      
                ]
              },
              
            ]
          },
            
        ]
      },
    
      
    ]
  },






  {
    title: 'Waiter Manage ',
    isSubMenuActive: false,
    subMenu:[
      {
        title: 'DoorBud',
        path: driverManage.dispatcherDetail.path
      },
          
      {
        title: 'Jawafa ',
        isSubMenuActive: false,
        subMenu:[
          {
            title: 'Admin Waiter ',
            isSubMenuActive: false,
            subMenu:[
              {
                title: 'Vendor Waiter ',
                isSubMenuActive: false,
                subMenu:[
                  {
                    title: 'New Waiter ',
                    path: driverManage.createDriver.path
                  },
                              
                  {
                    title: 'Waiter List',
                    path: driverManage.createDriver.path
                  },
                      
                ]
              },
                      
              {
                title: 'Fleet Waiter ',
                isSubMenuActive: false,
                subMenu:[
                  {
                    title: 'New Waiter ',
                    path: driverManage.createDriver.path
                  },
                              
                  {
                    title: 'Waiter List',
                    path: driverManage.createDriver.path
                  },
                      
                ]
              },
              
            ]
          },
            
        ]
      },
    
      
    ]
  },

  



  {
    title: 'Vendor Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'DoorBud',
        path: driverManage.createDriver.path
      },
      {
        title:'Jawafa',
        isSubMenuActive:false,
        subMenu:[
          {
            title:'Create Vendor',
            path: driverManage.createDriver.path
          },
          {
            title:'Vendro List',
            path: driverManage.createDriver.path
          },

        ]

      },
      {
        title:'Jawafa',
        path: driverManage.createDriver.path
      }, {
        title:'Jimmy Guaco\'s',
        path: driverManage.createDriver.path
      },
    ]
  },

  {
    title:'User Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'DoorBud',
        path: driverManage.createDriver.path
      },
      {
        title:'Jawafa',
        path: driverManage.createDriver.path
      },
      {
        title:'jimmy Guaco\'s',
        path: driverManage.createDriver.path
      },
    ]
  },





  {
    title:'Rider Manage ',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'DoorBud',
        path: driverManage.createDriver.path
      },
      {
        title:'Jawafa',
        path: driverManage.createDriver.path
      },
      {
        title:'jimmy Guaco\'s',
        path: driverManage.createDriver.path
      },
    ]
  },




  {
    title:'Main Categories',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Add New Category',
        path: driverManage.createDriver.path
      },
      {
        title:'Grocery',
        path: driverManage.createDriver.path
      },
      {
        title:'Restaurant',
        path: driverManage.createDriver.path
      },
      {
        title:'Pharma',
        path: driverManage.createDriver.path
      },
      {
        title:'Vegetable',
        path: driverManage.createDriver.path
      },
    ]
  },


  {
    title:'Location Mange ',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Add New Category',
        path: driverManage.createDriver.path
      },
      {
        title:'DoorBud',
        path: driverManage.createDriver.path
      },
      {
        title:'Jawafa',
        path: driverManage.createDriver.path
      },
      {
        title:'Jimmy Guaco\'s',
        path: driverManage.createDriver.path
      },
    ]
  },



  {
    title:'Menu Manage ',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Grocery',
        path: driverManage.createDriver.path
      },
      {
        title:'Restaurant',
        path: driverManage.createDriver.path
      },
      {
        title:'Pharma',
        path: driverManage.createDriver.path
      },
      {
        title:'Vegetable',
        path: driverManage.createDriver.path
      },
    ]
  },




  {
    title:'Order Manage (Driver) ',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Grocery',
        path: driverManage.createDriver.path
      },
      {
        title:'Restaurant',
        path: driverManage.createDriver.path
      },
      {
        title:'Pharma',
        path: driverManage.createDriver.path
      },
      {
        title:'Vegetable',
        path: driverManage.createDriver.path
      },
    ]
  },



  {
    title:'Order Manage (Waiter) ',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Grocery',
        path: driverManage.createDriver.path
      },
      {
        title:'Restaurant',
        path: driverManage.createDriver.path
      },
      {
        title:'Pharma',
        path: driverManage.createDriver.path
      },
      {
        title:'Vegetable',
        path: driverManage.createDriver.path
      },
    ]
  },





  {
    title:'Document Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Create New',
        path: driverManage.createDriver.path
      },
      {
        title:'Admin',
        path: driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path: driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path: driverManage.createDriver.path
      },
      {
        title:'Driver',
        path:driverManage.createDriver.path
      }
    ]
  },


  {
    title:'Vehicle Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Vehicle Type',
        path: driverManage.createDriver.path
      },
      {
        title:'Vehicle Company',
        path: driverManage.createDriver.path
      },
      {
        title:'Vehicle Model',
        path: driverManage.createDriver.path
      },
      
    ]
  },


  {
    title:'Fare Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Driver',
        isSubMenuActive:false,
        subMenu:[
          {
            title:'Add New ',
            path:driverManage.createDriver.path
          },

          {
            title:'Fare List',
            path:driverManage.createDriver.path
          }
        ]
      },

      

      {
        title:'Waiter',
        isSubMenuActive:false,
        subMenu:[
          {
            title:'Add New ',
            path:driverManage.createDriver.path
          },

          {
            title:'Fare List',
            path:driverManage.createDriver.path
          }
        ]
      },


    ]
  },




  {
    title:'Commission Mange',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Vendor',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },



  {
    title:'Referral Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },

  {
    title:'Statements Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Overall Order',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet Manage',
        isSubMenuActive:false,
        subMenu:[
          {
            title:'A1 Ride',
            isSubMenuActive:false,
            subMenu:[
              {
                title:'Dispatcher',
                path:driverManage.createDriver.path
              },
              {
                title:'Driver',
                path:driverManage.createDriver.path
              },
              {
                title:'Waiter',
                path:driverManage.createDriver.path
              },
            ]
          }
        ]
      }
    ]
  },


  {
    title:'Admin Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'XP Eats',
        isSubMenuActive:false,
        subMenu:[
          {
            title:'Agent',
            isSubMenuActive:false,
            subMenu:[
              {
                title:'Vendor',
                path:driverManage.createDriver.path
              }
            ]
          },
          {
            title:'Vendor',
            isSubMenuActive:false,
            subMenu:[
              {
                title:'Out Let',
                path:driverManage.createDriver.path
              },
              {
                title:'Helper',
                path:driverManage.createDriver.path
              },
              {
                title:'Waiter',
                path:driverManage.createDriver.path
              },
              {
                title:'Driver',
                path:driverManage.createDriver.path
              },
            ]    
          },
        ]
      }
    ]
  },




  {
    title:'Cancellation Reason Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Add New',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },



  {
    title:'Complaints Manage',
    isSubMenuActive:false,
    subMenu:[
 
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },


  



  {
    title:'User Guide Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Add New',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Vendor',
        path:driverManage.createDriver.path
      },
      {
        title:'Vendor',
        path:driverManage.createDriver.path
      },

      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Complaints Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Vendor',
        path:driverManage.createDriver.path
      },
      {
        title:'Vendor',
        path:driverManage.createDriver.path
      },

      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Help & Support Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },




  {
    title:'Account Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },






  {
    title:'Report Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Data Analyst Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Media Gallery',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Grocery',
        path:driverManage.createDriver.path
      },
      {
        title:'Restaurant',
        path:driverManage.createDriver.path
      },
      {
        title:'Pharma',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Vegetable',
        path:driverManage.createDriver.path
      },
    ]
  },





  {
    title:'Offer Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },


  {
    title:'Promotion Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },




  {
    title:'SMS Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },




  {
    title:'Email Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Refund Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },





  {
    title:'Penalty Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },




  {
    title:'Tips Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Rider',
        path:driverManage.createDriver.path
      }
      
    ]
  },




  {
    title:'Peak Base Fare Manage',
    isSubMenuActive:false,
    subMenu:[
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      }
    ]
  },


  {
    title:'FAQ Manage',
    isSubMenuActive:false,
    subMenu:[
      
      {
        title:'Admin',
        path:driverManage.createDriver.path
      },
      {
        title:'Fleet',
        path:driverManage.createDriver.path
      },
      {
        title:'Dispatcher',
        path:driverManage.createDriver.path
      },
      
      {
        title:'Driver',
        path:driverManage.createDriver.path
      },
      {
        title:'Waiter',
        path:driverManage.createDriver.path
      },
      {
        title:'User',
        path:driverManage.createDriver.path
      },
      {
        title:'Rider',
        path:driverManage.createDriver.path
      },
      {
        title:'Helper',
        path:driverManage.createDriver.path
      },
      {
        title:'Data Analyst',
        path:driverManage.createDriver.path
      }
    ]
  },




];