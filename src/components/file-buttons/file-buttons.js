import React from 'react';
import { Link } from 'react-router';

class FileButtons extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
      <div>
      	<Link to={"/opportunities/" + this.props.org._id + "/evaluation/" + this.props.details._id}><button className="cstm-btn" type="button">GET EVALUATION
      	</button></Link>
      	<form className="file-buttons" id="submit_upload" action="/opportunities/upload" method="post" encType="multipart/form-data">
						<button className="cstm-btn" id="user_upload">UPLOAD EVALUATION
						</button>
				</form>
      </div>
	  );
	}
}

export default FileButtons;