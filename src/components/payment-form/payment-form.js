import React from 'react';
import {connect} from 'react-redux';
import { Input } from 'react-bootstrap';
import { submitPayment } from '../../actions/actions';

class PaymentForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      payment: { // the data we want our form to manage
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
      },
      errormessage: "",
      pending: false
    };

    this.handleFormSubmit = (e) => {
      e.preventDefault();
      var companyID = this.props.companyID;
      var evalID = this.props.evalID;
      this.setState({pending: true});
      this.props.dispatch(submitPayment(this.state.payment, companyID, evalID)).then(
        (result) => {
          if (result.success === false) {
            this.setState({errormessage: "Payment declined. Please try again.", pending: false});
          }
        }
      );
    }

  }

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
                    <Input type="text" size="20" data-stripe="number" valueLink={this.linkState("payment.number")} disabled={this.state.pending} placeholder="Card Number" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-md-offset-1 nopadding">
                    <Input type="text" size="2" data-stripe="exp-month" valueLink={this.linkState("payment.month")} disabled={this.state.pending} placeholder="MM" />
                  </div>
                  <div className="col-md-3 noleftpadding">
                    <Input type="text" size="4" data-stripe="exp-year" valueLink={this.linkState("payment.year")} disabled={this.state.pending} placeholder="YYYY" />
                  </div>
                  <div className="col-md-4">
                    <Input type="text" size="2" data-stripe="cvc" valueLink={this.linkState("payment.cvc")} disabled={this.state.pending} placeholder="CVC" />
                  </div>
                </div>

                <div className="row">
                  <button className="cstm-btn payment" type="submit">GET PAVED</button>
                </div>
                <div>{this.state.errormessage}</div>
                {this.state.pending && <div>Payment processing...</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function __set(obj, path, val) {
  if (path.length === 0) return obj;

  const key = path[0];
  const nextVal = path.length === 1 ? val : __set(obj[key], path.slice(1), val);
  return {
    ...obj,
    [key]: nextVal
  };
}

// Decorator that injects a `linkState` method into the class
// which can take a dot-separated path and get/set values
// deep in state.
function NestedValueLink(klass) {
  klass.prototype.linkState = function(name) {
    const nameParts = name.split(".");
    const currentValue = nameParts.reduce((acc, part) => {
      return acc[part];
    }, this.state);

    const setNewValue = newValue => {
      const newState = __set(this.state, nameParts, newValue);
      this.setState(newState);
    };

    return {
      value: currentValue,
      requestChange: setNewValue
    };
  };
  return klass
}

function select(state) {
  return {
    hasUserPurchased: state.hasPurchased
  };
}

export default connect(select)(NestedValueLink(PaymentForm));