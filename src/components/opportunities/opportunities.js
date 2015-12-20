import React from 'react';
import {connect} from 'react-redux';
import OppDetails from '../opp-details/opp-details';
import { toggleDetails, setDetails } from '../../actions/actions'
import { store } from '../../main.js'

class Opportunities extends React.Component {
  constructor(){
    super();
    /*this.state = { showDetails: [] };*/

    this.onClick = (index) => {
      alert("hello");
      store.dispatch(toggleDetails(index))
      /*this.state.showDetails[k] = !this.state.showDetails[k];
      this.setState({ showDetails: this.state.showDetails });*/
    }
  }

  componentDidMount() {
    var theOpps = Object.keys(this.props.org.opportunities);
    var showDetails = [];
    theOpps.forEach((key) => {
      showDetails[key] = true;
    });
    store.dispatch(setDetails(showDetails))
  };

  render() {

    var oppList = [];

    Object.keys(this.props.org.opportunities).forEach((k) => {
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={this.onClick}>{this.props.org.opportunities[k].position}</td><td className="timeestimate">{this.props.org.opportunities[k].timeestimate}</td></tr>
      );
      oppList.push(<OppDetails key={this.props.org.opportunities[k]._id} index={k} /*showDetails={this.props.showDetails}*/ details={this.props.org.opportunities[k]} />
      );
    });

    return (
      <tbody>
        {oppList}
      </tbody>
    );
  }
}

/*function mapStateToProps(state) {
  return {
    showDetails: store.getState('showDetails')
  };
}
*/
export default Opportunities