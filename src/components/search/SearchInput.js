// @flow

import React from 'react';

const SearchInput = ({ onSearchKeyUp }) => {

	const onKeyUp = (e) => {
		onSearchKeyUp(e.target.value);
	};

	return (
		<div>
			<input type="search" onKeyUp={onKeyUp} />
		</div>
	)
};

export default SearchInput;