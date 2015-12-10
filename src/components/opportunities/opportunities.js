import React from 'react';
import OppDetails from '../opp-details/opp-details';
import { toggleDetails, setDetails } from '../../actions/actions'
import { store } from '../../main.js'

class Opportunities extends React.Component {
  constructor(){
    super();
    /*this.state = { showDetails: [] };
*/
    this.onClick = (k) => {
      store.dispatch(toggleDetails(k))
      /*this.state.showDetails[k] = !this.state.showDetails[k];
      this.setState({ showDetails: this.state.showDetails });*/
    }
  }

  componentDidMount() {
    var theOpps = Object.keys(this.props.org.opportunities);
    var showDetails = [];
    theOpps.forEach((key) => {
      showDetails[key] = false;
    });
    store.dispatch(setDetails(showDetails))
  };

  render() {

    var oppList = [];

    Object.keys(this.props.org.opportunities).forEach((k) => {
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={this.onClick}>{this.props.org.opportunities[k].position}</td><td className="timeestimate">{this.props.org.opportunities[k].timeestimate}</td></tr>
      );
      oppList.push(<OppDetails key={this.props.org.opportunities[k]._id} index={k} showDetails={this.state.showDetails} details={this.props.org.opportunities[k]} />
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