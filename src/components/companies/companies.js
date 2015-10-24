import React from 'react';

class Companies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var orgsList = [];

		this.props.orgs.map((org) => {
			orgsList.push(<li key={org.name}>{org.name}</li>)
		});

	  return (
      <div className="companies">
      	<ul>
      		{orgsList}
      	</ul>
      </div>
	  );
	}
}

export default Companies;