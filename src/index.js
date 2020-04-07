import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
import App from './containers/App'

const store = createStore(searchRobots)

ReactDOM.render(
	<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
