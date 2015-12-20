import React from 'react';
import {connect} from 'react-redux';
import Banner from './banner';
import Companies from '../companies/companies';
import { store } from '../../main.js'

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

function mapStateToProps(state) {
  return {
    orgs: store.getState('orgs')
	};
}

export const OpportunitiesPageContainer = connect(mapStateToProps)(OpportunitiesPage);