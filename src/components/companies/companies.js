import React from 'react';
import {Map, List} from 'immutable';
import Opportunities from '../opportunities/opportunities';
import OppDetails from '../opp-details/opp-details';

class Companies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var orgsList = [];

		this.props.orgs.map((org) => {
			orgsList.push(<tr key={org._id + org.name}><th className="company-name">{org.name}</th></tr>
			);
			orgsList.push(<Opportunities org={org} key={org._id} />
			);
		});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2">
	      	<table className="table">
	      		<tbody>
	      			{orgsList}
	      		</tbody>
	      	</table>
	      </div>
      </div>
	  );
	}
}

export default Companies;