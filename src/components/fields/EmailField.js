// @flow

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import FieldError from './FieldError';
import {inputKeyUp} from './../../actions';
import {getFieldData} from './../../reducers/input';
import ValidatedInput from './../fields/ValidatedInput';

const mapStateToProps = (state) => {
	return {
		fieldName: 'email',
		errorText: getFieldData(state.inputState, 'email').errorText,
	}
};

const mapDispatchToProps = (dispatch) => ({
	onKeyUpEvent(fieldName, value) {
		dispatch(inputKeyUp(fieldName, value));
	},
});

const EmailField = connect(
	mapStateToProps,
	mapDispatchToProps
)(ValidatedInput);

export default EmailField;