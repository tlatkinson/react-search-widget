// @flow

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import SearchList from './../SearchList';
import CollegeSearchListItem from './CollegeSearchListItem';
import {getSearchResultsById} from './../../../reducers/search.js'

class CollegeSearchList extends Component {
	componentWillUpdate (nextProps, nextState) {
		console.log(nextProps.searchItems);
		console.log(nextState);
		return true;
	}

	render () {
		return (
			<SearchList searchItems={this.props.searchItems} SearchListItem={CollegeSearchListItem} />
		)
	}
}

const mapStateToProps = (state, {id}) => {
	return {
		searchItems: getSearchResultsById(state.searchState, id),
		SearchListItem: CollegeSearchListItem,
	}
};

CollegeSearchList = connect(
	mapStateToProps
)(CollegeSearchList);

export default CollegeSearchList;

// @flow

//import React, { Component, PropTypes } from 'react';
//import SearchList from './../SearchList';
//import {connect} from 'react-redux';
//import CollegeSearchListItem from './CollegeSearchListItem';
//import {getSearchResultsById} from './../../../reducers/search.js'
//
//const mapStateToProps = (state, {id}) => {
//	return {
//		searchItems: getSearchResultsById(state.searchState, id),
//		SearchListItem: CollegeSearchListItem
//	}
//};
//
//const CollegeSearchList = connect(
//	mapStateToProps
//)(SearchList);
//
//export default CollegeSearchList;