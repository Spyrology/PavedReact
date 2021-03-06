import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from './reduxdevtools'
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import routes from './routes';
import oppsSource from './data/opportunities';
import { loadOpps, loadUserDetails } from './actions/actions';

let history = createBrowserHistory();

const finalCreateStore = compose(applyMiddleware(thunk), DevTools.instrument())(createStore);

const store = finalCreateStore(reducer);

store.dispatch(loadOpps());

window.store = store;

export { store }

store.dispatch(loadUserDetails(
		() => {
			ReactDOM.render((
				<Provider store={store}>
				<div>
					<DevTools />
			  	<Router history={history} routes={routes} />
			  </div>
			  </Provider>
			), document.querySelector('#app'));
		}
	)
);