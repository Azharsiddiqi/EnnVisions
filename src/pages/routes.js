import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
 
import Index from './Dashboard/index';
import AddEdit from './Roles/AddEdit';
import UserRole from './Roles/UserRoles';
import CreateDispatcher from './Roles/createDispatcher';
import Helper from './Roles/helper';
import AdminInfo from './Admin/adminInfo';
import DispatcherInfo from './Roles/dispatcherInfo';
import VenderList from './Roles/venderList';
import CreateAdmin from './Admin/createAdmn';
import Page26 from './page-26.js';
import Page6 from './page-6.js';
import Page8 from './page-8.js';
import Page12 from './page-12.js';
import Page14 from './page-14.js';
import Page15 from './page-15.js';
import Page18 from './page-18.js';
import Page20 from './page-20.js';
import Page23 from './page-23.js';
import Page33 from './page-33.js';
import Page35 from './page-35.js';
import CreateVendor from './Vendor/createVendor';
import NewDriver from './Driver/newDriver';
import Page38 from './page-38';
import Page13 from './page-13';
import ViewVendor from './Vendor/viewVendor';



class Routes extends React.Component {

	render(){
		console.log("checking props: ", this.props);
		return (
			<Router>
				<Route  
					exact 
					path={"/add-role"} 
					component={
						() => <AddEdit />
					}
				/>

				<Route  
					exact 
					path={"/edit-role"} 
					component={
						() => <AddEdit />
					}
				/>

				<Route  
					exact 
					path={"/user-role"} 
					component={
						() => <UserRole />
					}
				/>
				
				<Route  
					exact 
					path={"/create-admin"} 
					component={
						() => <CreateAdmin />
					}
				/>
				<Route  
					exact 
					path={"/create-dispatcher"} 
					component={
						() => <CreateDispatcher />
					}
				/>
				<Route  
					exact 
					path={"/new-driver"} 
					component={
						() => <NewDriver />
					}
				/>
				<Route  
					exact 
					path={"/create-vendor"} 
					component={
						() => <CreateVendor />
					}
				/>
				<Route  
					exact 
					path={"/page-38"} 
					component={
						() => <Page38 />
					}
				/>
				<Route  
					exact 
					path={"/helper"} 
					component={
						() => <Helper />
					}
				/>
				<Route  
					exact 
					path={"/page-13"} 
					component={
						() => <Page13 />
					}
				/>
				<Route  
					exact 
					path={"/view-vendor"} 
					component={
						() => <ViewVendor />
					}
				/>
				<Route  
					exact 
					path={"/admin-info"} 
					component={
						() => <AdminInfo />
					}
				/>
				<Route  
					exact 
					path={"/dispatcher-info"} 
					component={
						() => <DispatcherInfo />
					}
				/>
				<Route  
					exact 
					path={"/vender-list"} 
					component={
						() => <VenderList />
					}
				/>
				<Route  
					exact 
					path={"/"} 
					component={
						() => <Index />
					}
				/>
				<Route  
					exact 
					path={"/page-26"} 
					component={
						() => <Page26 />
					}
				/>
				<Route  
					exact 
					path={"/page-6"} 
					component={
						() => <Page6 />
					}
				/>
				<Route  
					exact 
					path={"/page-8"} 
					component={
						() => <Page8 />
					}
				/>
				<Route  
					exact 
					path={"/page-12"} 
					component={
						() => <Page12 />
					}
				/>
				<Route  
					exact 
					path={"/page-14"} 
					component={
						() => <Page14 />
					}
				/>
				<Route  
					exact 
					path={"/page-15"} 
					component={
						() => <Page15 />
					}
				/>
				<Route  
					exact 
					path={"/page-18"} 
					component={
						() => <Page18 />
					}
				/>
				<Route  
					exact 
					path={"/page-20"} 
					component={
						() => <Page20 />
					}
				/>
				<Route  
					exact 
					path={"/page-23"} 
					component={
						() => <Page23 />
					}
				/>
				<Route  
					exact 
					path={"/page-33"} 
					component={
						() => <Page33 />
					}
				/>
				<Route  
					exact 
					path={"/page-35"} 
					component={
						() => <Page35 />
					}
				/>

			</Router>
		);
	}
}

export default withRouter(Routes);