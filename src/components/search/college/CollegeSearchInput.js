// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollegeSearchResults } from '../../../actions';
import SearchInput from './../SearchInput';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, {id}) => ({
	onSearchKeyUp(searchInput) {
		dispatch(fetchCollegeSearchResults(id, searchInput))
	},
});

const CollegeSearchInput = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchInput);

export default CollegeSearchInput;