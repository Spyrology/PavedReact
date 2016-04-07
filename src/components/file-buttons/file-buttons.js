import React from 'react';
import { Link } from 'react-router';
import oppsSource from '../../data/opportunities';
import { checkPaymentAndGetEval, paymentstatus } from '../../actions/actions';

class FileButtons extends React.Component {
	constructor(){
		super();

	}

	render() {
	  return (
  		<div>
      	<Link to={"/opportunities/" + this.props.org._id + "/evaluation/" + this.props.details._id}>
      		<button className="cstm-btn" type="button">GET EVALUATION
      		</button>
      	</Link>
    	</div>
	  );
	}
}

export default FileButtons;