import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import {OpportunitiesPageContainer} from './components/opportunities-page/opportunities-page';
import CheckAuthAndPayment from './components/checkauthandpayment/checkauthandpayment';
import LogIn from './components/auth/login';
import SignUp from './components/auth/signup';

const routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="/opportunities" component={OpportunitiesPageContainer}/>
	  <Route path="/opportunities/:companyID/evaluation/:id" component={CheckAuthAndPayment}/>
	  <Route path="/login" component={LogIn}/>
	  <Route path="/signup" component={SignUp}/>
	</Route>
);

export default routes;