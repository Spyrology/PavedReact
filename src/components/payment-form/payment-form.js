import React from 'react';
import {connect} from 'react-redux';
import { Input } from 'react-bootstrap';

class PaymentForm extends React.Component {
  constructor(){
    super();

    /*this.handleFormSubmit = (e) => {
      e.preventDefault();
      var data = this.refs.data.getValue();
      this.props.dispatch(authPayment(formdata));
    }*/

  }

  /*componentWillReceiveProps(newProps) {
    if (newProps.hasUserPurchased === true) {
      var redirectURL = this.props.location.state.redirectURL || '/';
      this.props.history.pushState({}, redirectURL);
    }
  }*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="form">
              <div className="form-header">
              </div>
              <div className="form-body">
                <form onSubmit={this.handleFormSubmit}>
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <span className="payment-errors"></span>
                  </div>
                </div>

                <div className="row form-details">
                  <div className="col-md-10 col-md-offset-1">
                    <Input type="text" size="20" data-stripe="number" placeholder="Card Number" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-md-offset-1 nopadding">
                    <Input type="text" size="2" data-stripe="exp-month" placeholder="MM" />
                  </div>
                  <div className="col-md-3 noleftpadding">
                    <Input type="text" size="4" data-stripe="exp-year" placeholder="YYYY" />
                  </div>
                  <div className="col-md-4">
                    <Input type="text" size="2" data-stripe="cvc" placeholder="CVC" />
                  </div>
                </div>

                <div className="row">
                  <button className="cstm-btn payment" type="submit">GET PAVED</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    hasUserPurchased: state.hasPurchased
  };
}

export default connect(select)(PaymentForm);