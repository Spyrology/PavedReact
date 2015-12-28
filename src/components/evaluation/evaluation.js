import React from 'react';
import {connect} from 'react-redux';

class Evaluation extends React.Component {
	constructor(){
	 super();
	}

	render() {

		let evalCompanyName = [];
		let company = {};
		let evalOpportunityDetails = [];

    this.props.orgs.map((org) => {
    	if (org._id === this.props.params.companyID) {
    		company = org;
				evalCompanyName.push(<tr key={org._id + org.name}><th className="company-name">{org.name}</th></tr>
				);
			}
		});

		Object.keys(company.opportunities).forEach((k) => {
			if (company.opportunities[k]._id === this.props.params.id) {
				evalOpportunityDetails.push(<tr key={company.opportunities[k]._id}><td className="position-names">{company.opportunities[k].position}</td><td>{company.opportunities[k].description}</td></tr>
				);
			}
		});

	  return (
      <table>
      	<tbody>
      		{evalCompanyName}
      		{evalOpportunityDetails}
      	</tbody>
      </table>
	  );
	}
}

function select(state) {
  return {
    orgs: state.opps
  };
}

export default connect(select)(Evaluation);