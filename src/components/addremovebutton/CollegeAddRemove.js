// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRemoveButton from './AddRemoveButton';
import { addRemoveCollege } from  './../../actions';

//TODO convert to just add remove college?

//TODO need to add lifecycle stuff to this

const mapStateToProps = (state) => ({
	added: state.added,
	copy: state.added ? '-' : '+',
});

//TODO description is undefined?
const mapDispatchToProps = (dispatch, {collegeId, added, description}) => ({
	onAddRemoveClick() {
		dispatch(addRemoveCollege(collegeId, description, added));
	}
});

const CollegeAddRemove = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRemoveButton);

export default CollegeAddRemove;