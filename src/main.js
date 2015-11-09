import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import routes from './routes';

let history = createBrowserHistory();

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    orgs: [
			{name: 'Noodle', position: 'Editor', status: 'Open', Requirements: 'Portfolio', Price: '99'},
			{name: 'Thinkful', position: 'Marketing Coordinator', status: '3 months', Requirements: 'None', Price: '199'}
		]
  }
});

ReactDOM.render((
	<Provider store={store}>
  	<Router history={history} routes={routes} />
  </Provider>
), document.querySelector('#app'));