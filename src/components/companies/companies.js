import React from 'react';
import {Map, List} from 'immutable';
import Positions from '../positions/positions';
import PosDetails from '../pos-details/pos-details';

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
      	{orgsList}
      </div>
	  );
	}
}

export default Companies;