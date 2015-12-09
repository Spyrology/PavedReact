import React from 'react';
import OppDetails from '../opp-details/opp-details';

class Opportunities extends React.Component {
  constructor(){
    super();
    this.state = { showDetails: {} };

    this.onClick = (k) => {
      this.state.showDetails[k] = !this.state.showDetails[k];
      this.setState({ showDetails: this.state.showDetails });
    }
  }

  componentDidMount() {
    const theOpps = Object.keys(this.props.org.opportunities);
    console.log(theOpps);
    theOpps.forEach((key) => {
      this.state.showDetails[key] = true;
    });
  }

  render() {

    var oppList = [];

    Object.keys(this.props.org.opportunities).forEach((k) => {
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={this.onClick}>{this.props.org.opportunities[k].position}</td><td className="timeestimate">{this.props.org.opportunities[k].timeestimate}</td></tr>
      );
      oppList.push(<OppDetails key={this.props.org.opportunities[k]._id} kay={k} showDetails={this.state.showDetails} details={this.props.org.opportunities[k]} />
      );
    });

  	return (
  		<tbody>
				{oppList}
			</tbody>
  	);
  }
}

export default Opportunities;