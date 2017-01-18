// @flow

import React from 'react';
import {connect} from 'react-redux';

let CollegeList = ({ collegeList }) => {
	return (
		<ul>
			{collegeList.map(college =>
				<li>{college.collegeName}</li>
			)}
		</ul>
	)
};

const mapStateToProps = (state) => ({
	collegeList: state.collegeListState
});

CollegeList = connect(mapStateToProps)(CollegeList);

export default CollegeList;