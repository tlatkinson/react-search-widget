// @flow

const collegeListReducer = (collegeListState = [], action) => {
	switch (action.type) {
		case 'COLLEGE_ADDED':
			return addToCollegeList(collegeListState, action);
			break;
		case 'COLLEGE_REMOVED':
			return removeFromCollegeList(collegeListState, action);
		default:
			return collegeListState;
	}
};

export default collegeListReducer;

const addToCollegeList = (collegeListState, action) => {
	return [...collegeListState, {
		collegeId: action.collegeId,
		collegeName: action.collegeName
	}]
};

const removeFromCollegeList = (collegeListState, action) => {
	return collegeListState.filter(college => college.collegeId !== action.collegeId);
};