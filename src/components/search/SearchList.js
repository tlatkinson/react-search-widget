// @flow

import React from 'react';
import { v4 } from 'node-uuid';

const SearchList = ({ searchItems, SearchListItem  }) => {
	return (
		<ul>
			{searchItems.map(searchItem =>
				<SearchListItem key={v4()} searchItem={searchItem} />
			)}
		</ul>
	)
};

export default SearchList;