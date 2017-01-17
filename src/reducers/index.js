// @flow

import { combineReducers } from 'redux';
import searchReducer from './search';

const appState = combineReducers({
	searchState: searchReducer,
});

export default appState;