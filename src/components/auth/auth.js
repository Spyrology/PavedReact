import React from 'react';
import { Input } from 'react-bootstrap';

class Auth extends React.Component {
	constructor(){
	 super();
	}


	render() {

		const authForm = (
			<form>
			  <Input className="auth" type="email" label="Email Address" placeholder="Enter email" />
			  <Input className="auth" type="password" label="Password" />
			  <Input className="auth" type="password" label="Confirm Password" />
			</form>
		);

	  return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						{authForm}
					</div>
				</div>
			</div>
  	);
	}
}

export default Auth;