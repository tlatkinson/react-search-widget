// @flow

import * as api from '../api';

export const fetchCollegeSearchResults = (id, phrase, limit = 5, offset = 0) => (dispatch, getState) => {
	dispatch({
		type: 'COLLEGE_SEARCH',
		id,
		phrase,
	});

	if (phrase.trim().length === 0) {
		collegeSearchSuccess(dispatch, id, []);
	} else {
		api.fetchSearchResults('/hq/search/colleges', {
			phrase,
			limit,
			offset
		}).then(
			searchResults => {
				collegeSearchSuccess(dispatch, id, searchResults);
			}
		)
	}
};

export const addRemoveCollege = (collegeId, collegeName, addToList) => (dispatch) => {
	if (!addToList) {
		api.addToCollegeList(collegeId)
			.then(() => {
				dispatch({
					type: 'COLLEGE_ADDED',
					collegeId,
					collegeName,
				});
			}).catch(() => {
				dispatch({ //TODO temp
					type: 'COLLEGE_ADDED',
					collegeId,
					collegeName,
				});
			});
	} else {
		api.removeFromCollegeList(collegeId)
			.then(() => {
				dispatch({
					type: 'COLLEGE_REMOVED',
					collegeId,
					collegeName,
				});
			}).catch(() => {
				dispatch({ //TODO temp
					type: 'COLLEGE_REMOVED',
					collegeId,
					collegeName,
				});
			});
	}
};

const collegeSearchSuccess = (dispatch, id, searchResults) => {
	dispatch({
		type: 'COLLEGE_SEARCH_SUCCESS',
		id,
		searchResults
	});
};

export const inputKeyUp = (property, value) => (dispatch) => {
	dispatch({
		type: 'INPUT_KEYUP',
		property,
		value,
	});
};