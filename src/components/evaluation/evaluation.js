import React from 'react';
import oppsSource from '../../data/opportunities';

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
			//if false, null, undefined, empty string, 0 - will return false
		}
	}

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
      	<div className="col-md-8 col-md-offset-2 evaluation">
	      	<table className="table">
		      	<tbody>
		      		{evalCompanyName}
		      		{evalOpportunityDetails}
		      		{(this.state.uploadStatus === "pending") && <div>Upload pending</div>}
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
      	</div>
      </div>
	  );
	}
}

export default Evaluation;