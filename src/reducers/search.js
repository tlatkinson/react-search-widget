// @flow
import { combineReducers } from 'redux';

//TODO better way of adding searchType to widgets?
const searchReducer = (searchState = [], action) => {
	switch(action.type) {
		case 'COLLEGE_SEARCH':
			return mergeData(searchState, action, 'college', 'phrase');
		case 'COLLEGE_SEARCH_SUCCESS':
			return mergeData(searchState, action, 'college', 'searchResults');
		case 'COLLEGE_ADDED':
			return updateCollegeAdded(searchState, action.collegeId, true);
		case 'COLLEGE_REMOVED':
			return updateCollegeAdded(searchState, action.collegeId, false);
		default:
			return searchState;
	}
};

export default searchReducer

export const getSearchResultsById = (searchState, id) => {
	if(searchState[id] && searchState[id].searchResults) {
		return searchState[id].searchResults
	}

	return [];
};

const updateCollegeAdded = (searchState, collegeId, added) => {
	const newState = {...searchState};

	for (let id of Object.keys(newState)) {
		const searchComponent = searchState[id];

		if(searchComponent.searchType === 'college') {
			searchComponent.searchResults.forEach(searchResult => {
				if(searchResult.id === collegeId) {
					searchResult.added = added;
				}
			});
		}
	}

	return newState;
};


//.filter(searchResult => searchResult.id === collegeId)
//.map(searchResult => {
//	return {
//		...searchResult,
//		added: added
//	}
//});

//TODO export to util
const mergeData = (data, action, searchType, propertyModified) => {
	return {
		...data,
		[action.id]: {
			searchType,
			...data[action.id],
			[propertyModified]: action[propertyModified],
		}
	};
};