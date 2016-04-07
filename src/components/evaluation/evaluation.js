import React from 'react';
import {connect} from 'react-redux';
import oppsSource from '../../data/opportunities';
import { Alert, ProgressBar } from 'react-bootstrap';
import _ from 'lodash';

class Evaluation extends React.Component {
	constructor(...args){
		super(...args);

		this.state = {
      uploadStatus: ""
    };

		this.handleDownload = (e) => {
      e.preventDefault();
      var companyID = this.props.companyID;
      var evalID = this.props.evalID;
      window.open(`http://localhost:8000/opportunities/${companyID}/download/${evalID}`);
      /*oppsSource.downloadMaterials(companyID, evalID);*/
    }

    this.handleUpload  = (e) => {
			e.preventDefault();
			var companyID = this.props.companyID;
      var evalID = this.props.evalID;
			var file = this.refs.fileInput.files[0];
			if (file) {
				this.setState({uploadStatus: "pending"});
	    	oppsSource.uploadEval(file, companyID, evalID).then(response => {
	    			if (response.data.success === true) {
	    				this.setState({uploadStatus: "success"})
	    			}
	    			else {
	    				this.setState({uploadStatus: "failed"})
	    			}
	    	});
			}
		}
	}

	render() {
		if (!this.props.evaluation) return <div/>;

		const alertPending = (
		  <Alert bsStyle="info">
		    <strong>Your evaluation is uploading...</strong>
		  </Alert>
		);

		const alertSuccess = (
		  <Alert bsStyle="success">
		    <strong>Upload successful! Strong work!</strong>
		  </Alert>
		);

		const alertFail = (
		  <Alert bsStyle="warning">
		    <strong>Uh oh! Something went wrong with your upload. Please try again or email info@paved.io for help.</strong>
		  </Alert>
		);

		const evalDetails = this.props.evalDetails;
		const org = this.props.orgs[this.props.companyID]
		const evaluation = _.find(org.opportunities, {_id: this.props.evalID});

	  return (
      <div className="row">
      	<div className="col-md-8 col-md-offset-2 evaluation">
	      	<table className="table">
		      	<tbody>
		      		<tr>
		      			<th className="company-name">{this.props.evaldetails}
		      			</th>
		      		</tr>
		      		<tr>
		      			<th className="company-name">{org.name}</th>
		      		</tr>
		      		<tr>
		      			<td className="position-names">{evaluation.position}
		      			</td>
		      		</tr>
		      		<tr>
		      			<td>
		      				{this.props.evaluation.description}
		      			</td>
		      		</tr>
		      	</tbody>
      		</table>
      		<div className="file-select">
      			<form className="file-buttons" onSubmit={this.handleDownload}>
							<button className="cstm-btn">DOWNLOAD MATERIALS
							</button>
						</form>
      		</div>
      		<div className="file-select">
	      		<form className="file-buttons" onSubmit={this.handleUpload}>
							<button className="cstm-btn" id="user_upload">UPLOAD EVALUATION
							</button>
							<div className="file-select">
								<input type="file" name="file" ref="fileInput" />
							</div>
						</form>
      		</div>
      		{(this.state.uploadStatus === "pending") && <div>{alertPending}</div>}
      		{(this.state.uploadStatus === "success") && <div>{alertSuccess}</div>}
      		{(this.state.uploadStatus === "failed") && <div>{alertFail}</div>}
      	</div>
      </div>
	  );
	}
}

function select(state, props) {
  return {
    evalDetails: state.evalDetails,
    evaluation: state.evalDetails[props.evalID]
  };
}

export default connect(select)(Evaluation);