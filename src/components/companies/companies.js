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

		Object.keys(this.props.orgs).map((id) => {
			var org = this.props.orgs[id];
			orgsList.push(<tr key={id + "orgname"}><th className="company-name">{org.name}</th></tr>
			);
			orgsList.push(<Opportunities org={org} key={id} />
			);
		});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2 primary">
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