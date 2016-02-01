import React from 'react';
import { Input } from 'react-bootstrap';
import { authUser, signUpUser } from '../../actions/actions';
import { Link } from 'react-router';
import {connect} from 'react-redux'; 

class SignUp extends React.Component {
	constructor(){
	 super();

	 
		this.handleSignUp = (e) => {
			e.preventDefault();
			var firstname = this.refs.firstname.getValue();
			var lastname = this.refs.lastname.getValue();
			var email = this.refs.email.getValue();
			var password = this.refs.password.getValue();
			this.props.dispatch(signUpUser(firstname, lastname, email, password));
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
					<Input className="auth-input" type="text" ref="firstname" placeholder="First Name" />
					<Input className="auth-input" type="text" ref="lastname" placeholder="Last Name" />
				  <Input className="auth-input" type="email" ref="email" placeholder="Email" />
				  <Input className="auth-input" type="password" ref="password" placeholder="Password" />
				  <Input className="auth-input" type="password" ref="confirm password" placeholder="Confirm Password" />
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
								<p className="login-text-alt" onClick={ () => this.toggleAuth()}>Log In</p>
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