import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import routes from './routes';
import oppsSource from './data/opportunities';

let history = createBrowserHistory();

const store = createStore(reducer);

var oppArray = [];

console.log("zoo");

oppsSource.getOpps()
  .then((dataObj) => {
  	dataObj.data.forEach(function(opp){
  		oppArray.push(opp.opportunities);
  	});
  console.log("woo");
  console.log(oppArray);
	store.dispatch({
	 	type: 'SET_STATE',
	  state: {
	    orgs: oppArray
	  }
	});
});

console.log("boo");

ReactDOM.render((
	<Provider store={store}>
  	<Router history={history} routes={routes} />
  </Provider>
), document.querySelector('#app'));