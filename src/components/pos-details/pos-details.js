import React from 'react';
// import FileButtons from '../file-buttons/file-buttons';

class PosDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
			<tr>
			{this.props.showDetails.k ? 
	  		<td>
		  		<div>
		  			{this.props.details.price}
		  		</div>
	  		</td> : null}
		  </tr>
  	);
	}
}

export default PosDetails;