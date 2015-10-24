import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
  render() {
  	return (
	  	<div>
	  		<ul>
					<li><IndexLink to='/'>Home</IndexLink></li>
		      <li><Link to='/about'>About</Link></li>
	  		</ul>
	  	</div>
  	);
  }
}

export default Menu;