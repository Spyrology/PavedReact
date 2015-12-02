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

		this.props.orgs.toJS().map((org) => {
			orgsList.push(<th className="company-name" key={org.name}>{org.name}</th>
			);
			orgsList.push(<Positions org={org} key={org.position} />
			);
		});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2">
	      	<table className="table">
	      		{orgsList}
	      	</table>
	      </div>
      </div>
	  );
	}
}

export default Companies;