import React from 'react';
import PosDetails from '../pos-details/pos-details';

class Positions extends React.Component {
	constructor(){
	 super();
	 this.state = { showDetails: false };

	 this.onClick = () => this.setState({ showDetails: !this.state.showDetails });
	}

  render() {
  	return (
  		<div>
  			<table>
      		<tbody>
  					<tr>
  						<td onClick={this.onClick}>{this.props.org.position}</td>
  						<td>{this.props.org.status}</td>
  					</tr>
  					<tr>
  						{this.state.showDetails ? <PosDetails org={this.props.org} /> : null}
  					</tr>
  				</tbody>
  			</table>
			</div>
  	);
  }
}

export default Positions;