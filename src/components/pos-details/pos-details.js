import React from 'react';

class PosDetails extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
      <td>{this.props.org.requirements}</td>
	  );
	}
}

export default PosDetails;