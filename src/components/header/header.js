import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
	constructor(){
	 super();
	}

  render() {
  	return (
  		<div className="row">
	  		<nav className="navbar navbar-custom">
					<ul>
						<li className="col-md-6 navbar-left">
							<IndexLink to='/'><span className="navbar-brand">PAVED</span></IndexLink>
						</li>
						<li className="col-md-6 navbar-right">
							<Link to='/opportunities'><span className="navbar-nav">OPPORTUNITIES</span></Link>
						</li>
					</ul>
				</nav>
			</div>
  	);
  }
}

export default Header;