import React from 'react';
import {connect} from 'react-redux';
import { toggleDetails, setDetails, closeAllDetails } from '../../actions/actions'
import DetailsModal from '../details-modal/details-modal';

class Opportunities extends React.Component {
  constructor(){
    super();

    this.onClick = (id) => {
      this.props.dispatch(toggleDetails(id));
    }

    this.onCloseModal = () => {
      this.props.dispatch(closeAllDetails());
    }
  }

  render() {

    var oppList = [];

    Object.keys(this.props.org.opportunities).forEach((k) => {
      var oppId = this.props.org.opportunities[k]._id 
      var isOpen = this.props.showDetails.indexOf(oppId) > -1;
      oppList.push(<tr key={this.props.org.opportunities[k]._id + this.props.org.opportunities[k].position}><td className="position-names" onClick={ () => this.onClick(oppId)}>{this.props.org.opportunities[k].position}</td><td className="status">{this.props.org.opportunities[k].status}</td></tr>
      );
      if (isOpen) {
        oppList.push(<DetailsModal key={this.props.org.opportunities[k]._id} org={this.props.org} showDetails={isOpen} details={this.props.org.opportunities[k]} callbackParent={this.onCloseModal} />
        );
      }
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