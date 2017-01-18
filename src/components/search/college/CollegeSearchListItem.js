// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CollegeAddRemove from './../../addremovebutton/CollegeAddRemove';

const CollegeSearchListItem = ({ searchItem  }) => {
	return (
		<li>
			<a href={"http://localhost:8080" + searchItem.url} target="_blank">{searchItem.title}</a>
			{'  '}
			<CollegeAddRemove collegeId={searchItem.id} title={searchItem.title} added={searchItem.added} />
		</li>
	)
};

export default CollegeSearchListItem;