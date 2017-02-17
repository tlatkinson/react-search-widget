import React, { Component, PropTypes } from 'react';
import SearchList from './../SearchList';
import {connect} from 'react-redux';
import MajorSearchListItem from './MajorSearchListItem';
import {getSearchResultsById} from './../../../reducers/search.js'

const mapStateToProps = (state, {id}) => {
	return {
		searchItems: getSearchResultsById(state.searchState, id),
		SearchListItem: MajorSearchListItem
	}
};

const MajorSearchList = connect (
	mapStateToProps
)(SearchList);

export default MajorSearchList;
