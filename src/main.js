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
import { loadUserDetails } from './actions/actions';

let history = createBrowserHistory();

const finalCreateStore = applyMiddleware(thunk)(createStore);

const store = finalCreateStore(reducer);

var oppArray = [];

var asyncDispatch = function (oppArray) {
	return dispatch => {
		return oppsSource.getOpps().then(
			(dataObj) => {
				oppArray = dataObj.data
			dispatch({
			 	type: 'LOAD_OPPS',
			  data: oppArray
			});
		});
	};
};

store.dispatch(asyncDispatch(oppArray));

export { store }

store.dispatch(loadUserDetails(
		() => {
			ReactDOM.render((
				<Provider store={store}>
			  	<Router history={history} routes={routes} />
			  </Provider>
			), document.querySelector('#app'));
		}
	)
);