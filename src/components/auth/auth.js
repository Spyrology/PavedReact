import React from 'react';
import { Input } from 'react-bootstrap';
import { authUser } from '../../actions/actions';
import { Link } from 'react-router';
import {connect} from 'react-redux'; 

class Auth extends React.Component {
	constructor(){
	 super();

	 	this.state = {
      login: true
    };

    this.toggleAuth = () => {
	    this.setState({login: !this.state.login});
	  }

	 /* this.logIn = () => {
	    this.setState({login: true});
	  }*/

		this.handleFormSubmit = (e) => {
			e.preventDefault();
			var email = this.refs.email.getValue();
			var password = this.refs.password.getValue();
			this.props.dispatch(authUser(email, password));
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
		const logIn = (
			<div className="login">
				<form onSubmit={this.handleFormSubmit}>
				  <Input className="auth-input" type="email" ref="email" placeholder="Enter email" />
				  <Input className="auth-input" type="password" ref="password" />
				  <div className="authbtn"><button className="cstm-btn">SUBMIT</button></div>
				</form>
			</div>
		);

	  return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4 auth-container">
						<div className="login-text-container">
							<p className="login-text">Log In</p>
						</div>
						<Link to='/signup' state={this.props.location.state}>
							<div className="signup-text-container">
								<p className="signup-text" onClick={ () => this.toggleAuth()}>Sign Up</p>
							</div>
						</Link>
						<div className="auth">
							{logIn}
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

export default connect(select)(Auth);