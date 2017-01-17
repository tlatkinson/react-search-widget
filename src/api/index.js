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
		headers: {
			Cookie: '__lota=25a3609d-50ac-49c3-8f9b-a836fc005166; shown-quick-apply-scholarship-notification=true; _lo_u=1; _vwo_uuid_v2=39F192C37352299B87A051CDAD3A0382|98fa26d839f6ac558c95d9d89adce267; _ga=GA1.1.1689241310.1445960430; JSESSIONID=E242D7E8D7EACF46B3733ED2FD877F3F; message-count=21; recommender-prefDropdown-location=2; recommender-prefDropdown-locationType=REGION; recommender-prefDropdown-major=81; s_cc=true; s_fid=5C0A058ACA5FD3B6-14F47BC45105D5A0; s_sq=cappexdtmcappexdev%3D%2526pid%253D%25252Fpage%25252FcollegeCenter%25252FmyCollegesTab.jsp%2526pidt%253D1%2526oid%253DUpdate%2526oidt%253D3%2526ot%253DSUBMIT'
		},
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
		headers: {
			Cookie: '__lota=25a3609d-50ac-49c3-8f9b-a836fc005166; shown-quick-apply-scholarship-notification=true; _lo_u=1; _vwo_uuid_v2=39F192C37352299B87A051CDAD3A0382|98fa26d839f6ac558c95d9d89adce267; _ga=GA1.1.1689241310.1445960430; JSESSIONID=E242D7E8D7EACF46B3733ED2FD877F3F; message-count=21; recommender-prefDropdown-location=2; recommender-prefDropdown-locationType=REGION; recommender-prefDropdown-major=81; s_cc=true; s_fid=5C0A058ACA5FD3B6-14F47BC45105D5A0; s_sq=cappexdtmcappexdev%3D%2526pid%253D%25252Fpage%25252FcollegeCenter%25252FmyCollegesTab.jsp%2526pidt%253D1%2526oid%253DUpdate%2526oidt%253D3%2526ot%253DSUBMIT'
		},
		qs: {
			hqUri: 'college-list-archive-reason/save',
			collegeId,
			studentId: 31389,
			archiveReasonText: '',
			archiveReasonIds: 14,
		}
	});
};