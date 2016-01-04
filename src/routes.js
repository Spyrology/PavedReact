import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import {OpportunitiesPageContainer} from './components/opportunities-page/opportunities-page';
import Evaluation from './components/evaluation/evaluation';
import Auth from './components/auth/auth';
import PaymentForm from './components/payment-form/payment-form';

const routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={Home}/>
	  <Route path="/opportunities" component={OpportunitiesPageContainer}/>
	  <Route path="/opportunities/:companyID/evaluation/:id" component={Evaluation}/>
	  <Route path="/auth" component={Auth}/>
	  <Route path="/payment" component={PaymentForm}/>
	</Route>
);

export default routes;