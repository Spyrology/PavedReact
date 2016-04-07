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
	  		<div className="col-md-6">
					<ul>
						<li>
							<IndexLink to='/'><div className="navbar-left"><img src='/images/paved.png' alt="PAVED" /></div></IndexLink>
						</li>
					</ul>
				</div>
				<div className="col-md-6 navbar-right">
					<ul>
						<li>
							<Link to='/opportunities'><span className="navbar-nav">JOB SEEKERS</span></Link>
						</li>
						<li>
							<span className="navbar-nav">EMPLOYERS</span>
						</li> 
					</ul>
				</div>
				</nav>
			</div>
  	);
  }
}

export default Header;