import React from 'react';
import { Input } from 'react-bootstrap';
import { authUser, signUpUser } from '../../actions/actions';
import { Link } from 'react-router';
import {connect} from 'react-redux'; 

class SignUp extends React.Component {
	constructor(){
	 super();

	 this.state = {
	 	loginErr: ""
	 }

	 
		this.handleSignUp = (e) => {
			e.preventDefault();
			var firstname = this.refs.firstname.getValue();
			var lastname = this.refs.lastname.getValue();
			var email = this.refs.email.getValue();
			var password = this.refs.password.getValue();
			var confirmpassword = this.refs.confirmPassword.getValue();
			if (password !== confirmpassword) {
				this.setState({loginErr: "Passwords do not match."});
			}
			this.props.dispatch(signUpUser(firstname, lastname, email, password, confirmpassword));
		}

	}

	componentWillReceiveProps(newProps) {
		if (newProps.isUserLoggedIn === true) {
			var state = this.props.location.state || {};
			var redirectURL = state.redirectURL || '/';
			this.props.history.pushState({}, redirectURL);
		}
	}	

	render() {

		const signUp = (
			<div className="signup">
				<form onSubmit={this.handleSignUp}>
					<div className="errormsg">{this.state.loginErr}&nbsp;</div>
					<Input className="auth-input" type="text" ref="firstname" placeholder="First Name" required/>
					<Input className="auth-input" type="text" ref="lastname" placeholder="Last Name" required/>
				  <Input className="auth-input" type="email" ref="email" placeholder="Email" required/>
				  <Input className="auth-input" type="password" ref="password" placeholder="Password" required/>
				  <Input className="auth-input" type="password" ref="confirmPassword" placeholder="Confirm Password" required/>
				  <div className="authbtn"><button className="cstm-btn">SUBMIT</button></div>
				</form>
			</div>
		);

	  return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4 signup-container">
						<Link to='/login' state={this.props.location.state}>
							<div className="login-text-container-alt">
								<p className="login-text-alt">Log In</p>
							</div>
						</Link>
						<div className="signup-text-container-alt">
							<p className="signup-text-alt">Sign Up</p>
						</div>
						<div className="auth">
							{signUp}
						</div>
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

export default connect(select)(SignUp);