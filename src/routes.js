import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import {OpportunitiesPageContainer} from './components/opportunities-page/opportunities-page';

const routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="/opportunities" component={OpportunitiesPageContainer}/>
	</Route>
);

export default routes;