import React from 'react';
import PosDetails from '../pos-details/pos-details';

class Positions extends React.Component {
  constructor(){
    super();
    this.state = { showDetails: {} };
   
  //this.state.showDetails = this.props.org.opportunities;

    this.onClick = (k) => this.setState({ showDetails: !this.state.showDetails[k] });
  }

  componentDidMount() {
    const theOpps = Object.keys(this.props.org.opportunities);
    console.log(theOpps);
    theOpps.forEach((key) => {
      this.state.showDetails[key] = false;
    });
  }

  render() {

    var oppList = [];

    /*this.props.org.opportunities.forEach((obj) => {
      oppList.push(<tr key={obj._id + obj.position}><td className="position-names" onClick={this.onClick}>{obj.position}</td><td className="timeestimate">{obj.timeestimate}</td></tr>
      );
      oppList.push(<PosDetails key={obj._id} showDetails={this.state.showDetails[obj]} details={obj} />
      );
    });*/

    Object.keys(this.props.org.opportunities).forEach((k) => {
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={this.onClick}>{this.props.org.opportunities[k].position}</td><td className="timeestimate">{this.props.org.opportunities[k].timeestimate}</td></tr>
      );
      oppList.push(<PosDetails key={this.props.org.opportunities[k]._id} kay={k} showDetails={this.state.showDetails} details={this.props.org.opportunities[k]} />
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