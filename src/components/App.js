// @flow

import React from 'react';
import CollegeSearch from './search/college/CollegeSearch';
import EmailField from './fields/EmailField';
import CollegeList from './collegelist/CollegeList';

const App = () => (
	<div>
		<span>college search 1</span>
		<CollegeSearch />
		<span>college search 2</span>
		<CollegeSearch />
		<span>college list</span>
		<CollegeList />
		<p />
		<span>email field</span>
		<EmailField />
	</div>
);

export default App;