// @flow

import React from 'react';
import CollegeSearch from './search/college/CollegeSearch';
import MajorSearch from './search/major/MajorSearch';
import EmailField from './fields/EmailField';
import CollegeList from './collegelist/CollegeList';

const App = () => (
	<div>
		<span>email field</span>
		<EmailField />
		<br />
		<span>college search 1</span>
		<CollegeSearch />
		<span>college search 2</span>
		<CollegeSearch />
		<span>college list</span>
		<CollegeList />
	</div>
);

export default App;