import React from 'react';
// import FileButtons from '../file-buttons/file-buttons';

class PosDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {

		var posPrice = [];
		var posReqs = [];

    this.props.org.opportunities.forEach((obj) => {
      posPrice.push(obj.price
      );
      posReqs.push(obj.requirements
      );
    });

	  return (
	  	<tbody>
	  	<tr>
	  		<td>{posPrice}
	  		</td>
	  	</tr>
	  	<tr>
	  		<td>{posReqs}
	  		</td>
	  	</tr>
	  	</tbody>
	  );
	}
}

export default PosDetails;