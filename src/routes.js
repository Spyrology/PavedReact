import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import {OpportunitiesContainer} from './components/opportunities/opportunities';

const routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="/opportunities" component={OpportunitiesContainer}/>
	</Route>
);

export default routes;