// @flow

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {

	const middlewares = [thunk];
	//TODO env var
	//if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	//}

	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middlewares))
	);
};

export default configureStore;
