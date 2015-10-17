import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './components/app';
import Home from './components/home/home';
/*import Opportunities from './components/opportunities/opportunities';*/

let history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      /*<Route path="opportunities" component={Opportunities}/>*/
    </Route>
  </Router>
), document.querySelector('#app'));