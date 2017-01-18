// @flow

import React, { Component, PropTypes } from 'react';
import SearchList from './../SearchList';
import {connect} from 'react-redux';
import CollegeSearchListItem from './CollegeSearchListItem';
import {getSearchResultsById} from './../../../reducers/search.js'

const mapStateToProps = (state, {id}) => {
	return {
		searchItems: getSearchResultsById(state.searchState, id),
		SearchListItem: CollegeSearchListItem
	}
};

const CollegeSearchList = connect(
	mapStateToProps
)(SearchList);

export default CollegeSearchList;