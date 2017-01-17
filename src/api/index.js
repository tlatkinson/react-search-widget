// @flow

import rp from 'request-promise';

const HOST = 'http://localhost:8080';

export const fetchSearchResults = (url, data) => {
	return rp({
		uri: HOST + url,
		qs: data,
		json: true
	});
};

//TODO un-hard code studentId
//TODO remove hard coded header
export const addToCollegeList = (collegeId) => {
	return rp({
		method: 'POST',
		uri: HOST + '/hqRequest',
		qs: {
			hqUri: 'college-list/save',
			collegeId,
			studentId: 31389,
			rank: 1,
			note: '',
			studentCollegeTypeId: 9,
			studentCollegeInterestTypeId: -1,
			activeType: 'ACTIVE',
		},
	});
};

//TODO un-hard code studentId
export const removeFromCollegeList = (collegeId) => {
	return rp({
		method: 'POST',
		uri: HOST + '/hqRequest',
		qs: {
			hqUri: 'college-list-archive-reason/save',
			collegeId,
			studentId: 31389,
			archiveReasonText: '',
			archiveReasonIds: 14,
		}
	});
};