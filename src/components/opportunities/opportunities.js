import React from 'react';
import Banner from './banner';
import Companies from '../companies/companies';

const orgs = [
	{name: 'Noodle', position: 'Editor', status: 'Open', Requirements: 'Portfolio'},
	{name: 'Thinkful', position: 'Marketing Coordinator', status: '3 months', Requirements: 'None'}
];

class Opportunities extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	  return (
      <div className="opportunities">
      	<Banner />
      	<Companies
      		orgs={orgs}
      	/>
      </div>
	  );
	}
}

export default Opportunities;