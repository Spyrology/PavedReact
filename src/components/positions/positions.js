import React from 'react';
import PosDetails from '../pos-details/pos-details';

class Positions extends React.Component {
	constructor(){
	 super();
	 this.state = { showDetails: false };

	 this.onClick = () => this.setState({ showDetails: !this.state.showDetails });
	}

  render() {

    var oppList = [];

    this.props.org.opportunities.forEach((obj) => {
      oppList.push(<td className="position-names" onClick={this.onClick}>{obj.position}</td>
      );
      oppList.push(<td className="timeestimate">{obj.timeestimate}</td>
      );
    });

  	return (
  		<div>
  			<table>
      		<tbody>
  					<tr>
  						{oppList}
  					</tr>
  					{this.state.showDetails ? <PosDetails org={this.props.org} /> : null}
  				</tbody>
  			</table>
			</div>
  	);
  }
}

export default Positions;