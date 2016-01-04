import React from 'react';
import { Input } from 'react-bootstrap';
import { authUser } from '../../actions/actions'
import {connect} from 'react-redux'; 

class Auth extends React.Component {
	constructor(){
	 super();

		this.handleFormSubmit = (e) => {
			e.preventDefault();
			var email = this.refs.email.getValue();
			var password = this.refs.password.getValue();
			this.props.dispatch(authUser(email, password));
		}

	}

	componentWillReceiveProps(newProps) {
		if (newProps.isUserLoggedIn === true) {
			var redirectURL = this.props.location.state.redirectURL || '/';
			this.props.history.pushState({}, redirectURL);
		}
	}

	render() {
		const authForm = (
			<form onSubmit={this.handleFormSubmit}>
			  <Input className="auth" type="email" label="Email Address" ref="email" placeholder="Enter email" />
			  <Input className="auth" type="password" label="Password" ref="password" />
			  <Input className="auth" type="password" label="Confirm Password" />
			  <button className="cstm-btn">SUBMIT</button>
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

function select(state) {
  return {
    isUserLoggedIn: state.isAuth
  };
}

export default connect(select)(Auth);