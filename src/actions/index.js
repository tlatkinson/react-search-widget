// @flow

import * as api from '../util/api';

export const fetchMajorSearchResults = (id, phrase, limit = 5, offset = 0) => (dispatch, getState) => {
	dispatch({
		type: 'MAJOR_SEARCH',
		id,
		phrase,
	});

	const majors = [{id: 1, title:'Accounting'}, {id:2, title:'Computer Science'}];
	majorSearchSuccess(dispatch, id, majors);
};


const majorSearchSuccess = (dispatch, id, searchResults) => {
	dispatch({
		type: 'MAJOR_SEARCH_SUCCESS',
		id,
		searchResults
	});
};


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

const collegeSearchSuccess = (dispatch, id, searchResults) => {
	dispatch({
		type: 'COLLEGE_SEARCH_SUCCESS',
		id,
		searchResults
	});
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

export const validate = (property, value, validators) => (dispatch) => {
	dispatch({
		type: 'VALIDATE',
		property,
		value,
		validators,
	});
};