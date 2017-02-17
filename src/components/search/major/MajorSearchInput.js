import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMajorSearchResults } from '../../../actions';
import SearchInput from './../SearchInput';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, {id}) => ({
	onSearchKeyUp(searchInput) {
		dispatch(fetchMajorSearchResults(id, searchInput));
	}
});

const MajorSearchInput = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchInput);

export default MajorSearchInput;