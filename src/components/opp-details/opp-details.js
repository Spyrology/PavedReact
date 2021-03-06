import React from 'react';
import FileButtons from '../file-buttons/file-buttons';

class OppDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
			<tr>
	  		<td>
		  		<div>
		  			{this.props.details.description}
		  		</div>
		  		<div>
		  			{this.props.details.timeestimate}
		  		</div>
		  		<div>
		  			{this.props.details.requirements}
		  		</div>
		  		<div>
		  			{this.props.details.price}
		  		</div>
		  		<div>
		  			<FileButtons org={this.props.org} details={this.props.details} />
		  		</div>
	  		</td>
		  </tr>
  	);
	}
}

export default OppDetails;