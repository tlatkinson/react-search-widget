// @flow

import React from 'react';
import MajorSearchInput from './MajorSearchInput';
import MajorSearchList from './MajorSearchList';
import v4 from 'node-uuid';

const MajorSearch = () => {

	const id = v4();

	return (
		<div>
			<MajorSearchInput id={id}/>
			<MajorSearchList id={id}/>
		</div>
	)
};

export default MajorSearch;