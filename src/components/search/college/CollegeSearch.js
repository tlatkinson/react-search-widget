// @flow

import React from 'react';
import CollegeSearchInput from './CollegeSearchInput';
import CollegeSearchList from './CollegeSearchList';
import v4 from 'node-uuid';

const CollegeSearch = () => {
	const id = v4();

	return (
		<div>
			<CollegeSearchInput id={id} />
			<CollegeSearchList id={id} />
		</div>
	)
};

export default CollegeSearch;