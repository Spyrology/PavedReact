import React from 'react';
import { Link } from 'react-router';

class FileButtons extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
      <div>
      	<Link to={"/opportunities/" + this.props.org._id + "/evaluation/" + this.props.details._id}><button type="button">GET EVALUATION
      	</button></Link>
      	<form id="submit_upload" action="/opportunities/upload" method="post" encType="multipart/form-data">
						<button id="user_upload">UPLOAD EVALUATION
						</button>
						<input type="file" id="file" name="file" />
				</form>
      </div>
	  );
	}
}

export default FileButtons;