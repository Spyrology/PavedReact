import React from 'react';
import FileButtons from '../file-buttons/file-buttons';

class OppDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
			<tr>
			{this.props.showDetails ? 
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
	  		</td> : null}
		  </tr>
  	);
	}
}

export default OppDetails;