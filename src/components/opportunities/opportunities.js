import React from 'react';
import {connect} from 'react-redux';
import OppDetails from '../opp-details/opp-details';
import { toggleDetails, setDetails } from '../../actions/actions'

class Opportunities extends React.Component {
  constructor(){
    super();

    this.onClick = (id) => {
      this.props.dispatch(toggleDetails(id))
    }
  }

  render() {

    var oppList = [];

    Object.keys(this.props.org.opportunities).forEach((k) => {
      var oppId = this.props.org.opportunities[k]._id 
      var isOpen = this.props.showDetails.indexOf(oppId) > -1;
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={ () => this.onClick(oppId)}>{this.props.org.opportunities[k].position}</td><td className="status">{this.props.org.opportunities[k].status}</td></tr>
      );
      oppList.push(<OppDetails key={this.props.org.opportunities[k]._id} showDetails={isOpen} details={this.props.org.opportunities[k]} />
      );
    });

    return (
      <tbody>
        {oppList}
      </tbody>
    );
  }
}

function select(state) {
  return {
    showDetails: state.showDetails
  };
}

export default connect(select)(Opportunities);