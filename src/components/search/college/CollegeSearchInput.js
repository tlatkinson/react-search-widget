// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollegeSearchResults } from '../../../actions';
import SearchInput from './../SearchInput';

//TODO this component could go away if we want to assume all searches have the same core event handlers

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