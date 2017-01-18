// @flow

import React from 'react';
import { connect } from 'react-redux';
import AddRemoveButton from './AddRemoveButton';
import { addRemoveCollege } from  './../../actions';

const mapStateToProps = (state, {added}) => {
	return {
		added: added,
		copy: added ? '-' : '+'
	}
};

const mapDispatchToProps = (dispatch, {collegeId, title, added}) => {
	return {
		onAddRemoveClick() {
			dispatch(addRemoveCollege(collegeId, title, added));
		}
	};
};

const CollegeAddRemove = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRemoveButton);

export default CollegeAddRemove;