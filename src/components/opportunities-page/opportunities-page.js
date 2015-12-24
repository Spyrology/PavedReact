import React from 'react';
import {connect} from 'react-redux';
import Banner from './banner';
import Companies from '../companies/companies';

export const OpportunitiesPage = React.createClass({

	render: function() {
	  return (
      <div className="container opportunities">
      	<Banner />
      	<Companies orgs={this.props.orgs} />
      </div>
	  );
	}
});

function select(state) {
  return {
    orgs: state.opps
	};
}

export const OpportunitiesPageContainer = connect(select)(OpportunitiesPage);