import React from 'react';
import Positions from '../positions/positions';

class Companies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var orgsList = [];

		this.props.orgs.map((org) => {
			orgsList.push(<h3 key={org.name}>{org.name}</h3>
			);
			orgsList.push(<Positions org={org} key={org.position} />
			);
		});

	  return (
      <div className="companies-container">
      	<table>
      		<tbody>
      			{orgsList}
      		</tbody>
      	</table>
      </div>
	  );
	}
}

export default Companies;