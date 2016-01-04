import React from 'react';
import { Input } from 'react-bootstrap';

class PaymentForm extends React.Component {
  constructor(){
    super();
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
                <form action="" method="POST" id="payment-form">
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

export default PaymentForm;