import React, {useState} from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
 
import Login from './Login/login.jsx';
import ForgetPasswordEmail from './ForgetPasswordEmail/forgetPasswordEmail.jsx';
import ResetPassword from './ResetPassword/resetPassword.jsx';
import RegisterVendor from './RegisterVendor/registerVendor.jsx';


const Routes = () => {
	const [routes] = useState([
		{ path: "/login", component: Login },
		{ path: "/forgot-password-email", component: ForgetPasswordEmail },
		{ path: "/reset-password", component: ResetPassword },
		{ path: "/register-vendor", component: RegisterVendor },
	])
	return (
		<Router>
			{ routes.map(({path, component}, index) => (
				<Route  
					exact 
					key={index}
					path={path} 
					component={component}
				/>
			)) }
	</Router>
	)
}


export default withRouter(Routes);