import React, {useState} from 'react';
import {Route} from 'react-router-dom';
 
import Login from './Login/login.jsx';
import ForgetPasswordEmail from './ForgetPasswordEmail/forgetPasswordEmail.jsx';
import ResetPassword from './ResetPassword/resetPassword.jsx';
import RegisterVendor from './RegisterVendor/registerVendor.jsx';
import ConfirmationMessage from './RegisterVendor/components/confirmationMessage.jsx';


export default () => {
	const [routes] = useState([
		{ path: "/login", component: Login },
		{ path: "/forgot-password-email", component: ForgetPasswordEmail },
		{ path: "/reset-password", component: ResetPassword },
		{ path: "/register-vendor", component: RegisterVendor },
		{ path: "/confirmation-massage", component: ConfirmationMessage },
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