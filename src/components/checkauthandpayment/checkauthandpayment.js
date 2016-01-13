import React from 'react';
import {connect} from 'react-redux';
import Auth from '../auth/auth';
import Evaluation from '../evaluation/evaluation';
import PaymentForm from '../payment-form/payment-form';
import { checkPaymentAndGetEval, paymentstatus } from '../../actions/actions';


class CheckAuthAndPayment extends React.Component {
  constructor(){
    super();

  }

  componentWillMount() {
    if (!this.props.isUserLoggedIn) {
      this.props.history.pushState({redirectURL: this.props.location.pathname}, "/auth");
    }
    else if (!this.props.hasUserPurchased) {
      var companyID = this.props.params.companyID;
      var evalID = this.props.params.id;
      this.props.dispatch(checkPaymentAndGetEval(companyID, evalID));
    }
  }

  render() {
    var companyID = this.props.params.companyID;
    var evalID = this.props.params.id;

    var desiredComponent;
    if (!this.props.hasUserPurchased || this.props.hasUserPurchased === paymentstatus.PENDING) {
      desiredComponent = <div>LOADING</div>;
    }
    else if (this.props.hasUserPurchased === paymentstatus.NOT_PAID) {
      desiredComponent = <PaymentForm key={companyID} companyID={companyID} evalID={evalID} />;
    } 

    else {
      desiredComponent = <Evaluation key={evalID} orgs={this.props.orgs} companyID={companyID} evalID={evalID} />;
    }
  
    return (
      <div>
        {desiredComponent}
      </div>
    )
  }
}

function select(state, props) {
  var evalID = props.params.id;
  return {
    hasUserPurchased: state.hasPurchased[evalID],
    isUserLoggedIn: state.isAuth,
    orgs: state.opps
  };
}

export default connect(select)(CheckAuthAndPayment);