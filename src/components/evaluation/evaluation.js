import React from 'react';
/*import {connect} from 'react-redux';*/

class Evaluation extends React.Component {
	constructor(){
	 super();
	}

	/*componentWillMount() {
		if (!this.props.isUserLoggedIn) {
			this.props.history.pushState({redirectURL: this.props.location.pathname}, "/auth");
		}
	}*/

	render() {

		let evalCompanyName = [];
		let company = {};
		let evalOpportunityDetails = [];

    this.props.orgs.map((org) => {
    	if (org._id === this.props.companyID) {
    		company = org;
				evalCompanyName.push(<tr key={org._id + org.name}><th className="company-name">{org.name}</th></tr>
				);
			}
		});

		Object.keys(company.opportunities).forEach((k) => {
			if (company.opportunities[k]._id === this.props.evalID) {
				evalOpportunityDetails.push(<tr key={company.opportunities[k]._id}><td className="position-names">{company.opportunities[k].position}</td><tr><td>{company.opportunities[k].description}</td></tr></tr>
				);
			}
		});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2">
	      	<table className="table">
		      	<tbody>
		      		{evalCompanyName}
		      		{evalOpportunityDetails}
		      	</tbody>
      		</table>
      	</div>
      </div>
	  );
	}
}

/*function select(state) {
  return {
    orgs: state.opps,
    isUserLoggedIn: state.isAuth
  };
}
*/
export default Evaluation;