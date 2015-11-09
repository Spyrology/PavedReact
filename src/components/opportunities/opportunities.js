import React from 'react';
import {connect} from 'react-redux';
import Banner from './banner';
import Companies from '../companies/companies';

export const Opportunities = React.createClass({

	render: function() {
	  return (
      <div className="opportunities">
      	<Banner />
      	<Companies orgs={this.props.orgs} />
      </div>
	  );
	}
});

function mapStateToProps(state) {
  return {
    orgs: state.get('orgs')
  };
}

export const OpportunitiesContainer = connect(mapStateToProps)(Opportunities);