import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import routes from './routes';
import oppsSource from './data/opportunities';

let history = createBrowserHistory();

const finalCreateStore = applyMiddleware(thunk)(createStore);

const store = finalCreateStore(reducer);

var oppArray = [];

console.log("zoo");

var asyncDispatch = function (oppArray) {
	console.log("voo");
	return dispatch => {
		return oppsSource.getOpps().then(
			(dataObj) => {
		  	dataObj.data.forEach(function(opp){
		  		oppArray.push(opp.opportunities);
		 		});
			dispatch({
			 	type: 'SET_STATE',
			  state: {
			    orgs: oppArray
			  }
			});
		});
	};
};

store.dispatch(asyncDispatch(oppArray));

store.subscribe(function() {
  console.log(store.getState());
  console.log("coo");
});

console.log(oppArray);
console.log("boo");

ReactDOM.render((
	<Provider store={store}>
  	<Router history={history} routes={routes} />
  </Provider>
), document.querySelector('#app'));