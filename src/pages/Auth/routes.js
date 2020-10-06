import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
 
import Login from './Login';
import Forgot from './Forgot';
import Reset from './Reset';
import Signup from './Signup';



class Routes extends React.Component {

	render(){
		console.log("checking props: ", this.props);
		return (
			<Router  >
			
				<Route  
					exact 
					path={"/login"} 
					component={
						() => <Login />
					}
				/>

				<Route  
					exact 
					path={"/forgot-password"} 
					component={
						() => <Forgot />
					}
				/>

				<Route  
					exact 
					path={"/reset-password"} 
					component={
						() => <Reset />
					}
				/>

				<Route  
					exact 
					path={"/signup"} 
					component={
						() => <Signup />
					}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);