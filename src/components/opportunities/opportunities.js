import React from 'react';
import Companies from '../companies/companies';

const orgs = [
	{name: 'Noodle'},
	{name: 'Thinkful'}
];

class Opportunities extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
	  return (
      <div className="opportunities">
      	<h1>Opportunities</h1>
      	<Companies
      		orgs={orgs}
      	/>
      </div>
	  );
	}
}

export default Opportunities;