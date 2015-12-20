import React from 'react';
import {Map, List} from 'immutable';
import Opportunities from '../opportunities/opportunities';
import OppDetails from '../opp-details/opp-details';

class Companies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		console.log(this.props);

		var orgsList = [];

		this.props.orgs.orgs.map((org) => {
			orgsList.push(<th className="company-name" key={org._id + org.name}>{org.name}</th>
			);
			orgsList.push(<Opportunities org={org} key={org._id} />
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