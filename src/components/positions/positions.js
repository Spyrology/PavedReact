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
      oppList.push(<tr><td className="position-names" onClick={this.onClick}>{obj.position}</td><td className="timeestimate">{obj.timeestimate}</td></tr>
      );
      oppList.push(<PosDetails org={this.props.org} />
      );
    });

  	return (
  		<tbody>
				{oppList}
			</tbody>
  	);
  }
}

export default Positions;