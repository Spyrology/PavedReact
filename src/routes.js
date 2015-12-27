import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import {OpportunitiesPageContainer} from './components/opportunities-page/opportunities-page';
import Evaluation from './components/evaluation/evaluation';

const routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="/opportunities" component={OpportunitiesPageContainer}/>
	  	<Route path="/opportunities/evaluation" component={Evaluation}/>
	</Route>
);

export default routes;