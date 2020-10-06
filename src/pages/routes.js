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
					path={"/helper"} 
					component={
						() => <Helper />
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

			</Router>
		);
	}
}

export default withRouter(Routes);