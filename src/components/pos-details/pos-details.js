import React from 'react';
// import FileButtons from '../file-buttons/file-buttons';

class PosDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {

		var posDetails = [];

    this.props.org.opportunities.forEach((obj) => {
      posDetails.push(<tbody><tr><td>{obj.price}</td></tr><tr><td>{obj.requirements}</td></tr></tbody>
      );
    });

	  return (
	  	<tbody>
	  		{posDetails}
		  </tbody>
	  );
	}
}

export default PosDetails;