import React from 'react';

class Positions extends React.Component {
	constructor(){
	 super();
	}

  render() {
  	return (
  		<div>
  			<tr>
  				<p>{this.props.org.position}</p>
  				<p>{this.props.org.status}</p>
  			</tr>
			</div>
  	);
  }
}

export default Positions;