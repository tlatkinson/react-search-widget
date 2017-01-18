// @flow
import deepcopy from 'deep-copy';

const searchReducer = (searchState = {}, action) => {
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

export default searchReducer;

export const getSearchResultsById = (searchState, id) => {
	if(searchState[id] && searchState[id].searchResults) {
		return searchState[id].searchResults
	}

	return [];
};

const updateCollegeAdded = (searchState, collegeId, added) => {
	const newState = deepcopy(searchState);

	let keys = Object.keys(newState);

	for (let j = 0; j < keys.length; j++) {
		const searchComponent = newState[keys[j]];

		if(searchComponent.searchType === 'college') {
			for(let i = 0; i < searchComponent.searchResults.length; i++) {
				const searchResult = searchComponent.searchResults[i];

				if(searchResult.id === collegeId) {
					searchResult.added = added;
				}
			}
		}
	}

	return newState;
};

//TODO export to util
const mergeData = (data, action, searchType, propertyModified) => {
	return {
		...data,
		[action.id]: {
			searchType,
			...data[action.id],
			[propertyModified]: action[propertyModified],
		},
	};
};