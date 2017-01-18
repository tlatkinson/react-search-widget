// @flow

import { combineReducers } from 'redux';
import searchReducer from './search';
import inputReducer from './input';
import collegeListReducer from './collegeList';

const appState = combineReducers({
	searchState: searchReducer,
	inputState: inputReducer,
	collegeListState: collegeListReducer,
});

export default appState;