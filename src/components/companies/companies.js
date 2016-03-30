import React from 'react';
import {Map, List} from 'immutable';
import Opportunities from '../opportunities/opportunities';
import OppDetails from '../opp-details/opp-details';
import { Table } from 'react-bootstrap';

class Companies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var orgsList = [];

		Object.keys(this.props.orgs).map((id) => {
			var org = this.props.orgs[id];
			orgsList.push(<div key={id + "orgname"}><div className="company-name">{org.name}</div></div>
			);
			orgsList.push(<Opportunities org={org} key={id} />
			);
		});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2 primary">
      		<div>
	      		{orgsList}
	      	</div>
	      </div>
      </div>
	  );
	}
}

export default Companies;