import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
	constructor(){
	 super();
	}

  render() {
  	return (
  		<div className="header">
		  	<nav className="navigation">
					<ul>
						<li className="logo">
							<IndexLink className="logo" to='/'>PAVED</IndexLink>
						</li>
						<li className="nav-menu">
							<Link className="nav-menu" to='/opportunities'>OPPORTUNITIES</Link>
						</li>
					</ul>
				</nav>
			</div>
  	);
  }
}

export default Header;