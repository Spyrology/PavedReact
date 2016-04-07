import React from 'react';

class Banner extends React.Component {
	constructor(){
	 super();
	}

	render() {
	  return (
      <div className="row">
      	<div className="col-md-10 col-md-offset-1">
	      	<h2 className="banner-header">OPPORTUNITIES
	      	</h2>
					<p className="banner-text">Each position will be listed along with the employer’s estimate of when it will open, any absolute minimum requirements they may have, and the amount of time they suggest you spend on the evaluation. We will deliver your completed evaluation straight to the person that matters. No HR departments to block your path, no silly job descriptions and requirements. Put in the effort and you will be recognized.
					</p>
				</div>
      </div>
	  );
	}
}

export default Banner;