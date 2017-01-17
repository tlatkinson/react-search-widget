// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CollegeAddRemove from './../../addremovebutton/CollegeAddRemove';

const CollegeSearchListItem = ({ searchItem  }) => {
	const isAdded = () => searchItem.added;

	return (
		<li>
			<a href={"http://localhost:8080" + searchItem.url} target="_blank">{searchItem.title}</a>
			{'  '}
			<CollegeAddRemove added={isAdded} collegeId={searchItem.id} />
		</li>
	)
};

export default CollegeSearchListItem;

/*
class CollegeSearchListItem extends Component {

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.searchItem.added);
	}

	shouldComponentUpdate() {
		console.log(true);
		return true;
	}

	render () {
		return (
			<li>
				<a href={"http://localhost:8080" + this.props.searchItem.url} target="_blank">{this.props.searchItem.title}</a>
				{'  '}
				<CollegeAddRemove added={this.props.searchItem.added} collegeId={this.props.searchItem.id} />
			</li>
		)
	}
}

const mapStateToProps = (state, {searchItem}) => {
	return {
		searchItem,
	}
};


CollegeSearchListItem = connect(
	mapStateToProps
)(CollegeSearchListItem);
*/