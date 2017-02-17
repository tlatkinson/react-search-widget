// @flow

import React from 'react';

const CollegeSearchListItem = ({ searchItem  }) => {
	return (
		<li>
			{searchItem.id}: {searchItem.title}
		</li>
	)
};

export default CollegeSearchListItem;