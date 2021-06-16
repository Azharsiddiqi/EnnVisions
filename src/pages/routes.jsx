import React, {useState} from 'react';
import {Route} from 'react-router-dom';
 
import Index from './Dashboard/dashboard.jsx';
import AddEdit from './Roles/AddEdit.jsx';
import UserRole from './Roles/UserRoles.jsx';
import CreateDispatcher from './Roles/createDispatcher.jsx';
import Helper from './Roles/helper.jsx';
import AdminInfo from './Admin/adminInfo.jsx';
import DispatcherInfo from './Roles/dispatcherInfo.jsx';
import VenderList from './Roles/venderList.jsx';
import CreateAdmin from './Admin/createAdmin.jsx';
import Page26 from './page-26.jsx';
import Page6 from './page-6.jsx';
import Page8 from './page-8.jsx';
import Page12 from './page-12.jsx';
import Page14 from './page-14.jsx';
import Page15 from './page-15.jsx';
import Page18 from './page-18.jsx';
import Page20 from './page-20.jsx';
import Page23 from './page-23.jsx';
import Page33 from './page-33.jsx';
import Page35 from './page-35.jsx';
import CreateVendor from './Vendor/createVendor.jsx';
import NewDriver from './Driver/newDriver.jsx';
import Page38 from './page-38.jsx';
import Page13 from './page-13.jsx';
import ViewVendor from './Vendor/viewVendor.jsx';

export default () => {
	const [routes] = useState([
		{ path: "/add-role", component:AddEdit },
		{ path: "/edit-role", component:AddEdit },
		{ path: "/user-role", component:UserRole },
		{ path: "/create-admin", component:CreateAdmin },
		{ path: "/create-dispatcher", component:CreateDispatcher },
		{ path: "/new-driver", component:NewDriver },
		{ path: "/create-vendor", component:CreateVendor },
		{ path: "/page-38", component:Page38 },
		{ path: "/helper", component:Helper },
		{ path: "/page-13", component:Page13 },
		{ path: "/view-vendor", component:ViewVendor },
		{ path: "/admin-info", component:AdminInfo },
		{ path: "/dispatcher-info", component:DispatcherInfo },
		{ path: "/vender-list", component:VenderList },
		{ path: "/", component:Index },
		{ path: "/dashboard", component:Index },
		{ path: "/page-26", component:Page26 },
		{ path: "/page-6", component:Page6 },
		{ path: "/page-8", component:Page8 },
		{ path: "/page-12", component:Page12 },
		{ path: "/page-14", component:Page14 },
		{ path: "/page-15", component:Page15 },
		{ path: "/page-18", component:Page18 },
		{ path: "/page-20", component:Page20 },
		{ path: "/page-23", component:Page23 },
		{ path: "/page-33", component:Page33 },
		{ path: "/page-35", component:Page35 },
	])
	return (
		<>
			{ routes.map(({path, component}, index) => (
				<Route  
					exact 
					key={index}
					path={path} 
					component={component}
				/>
			)) }

		</>
	)
}